import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import Stripe from "stripe";
import prisma from "../../../lib/prisma";
import EmailProvider from "next-auth/providers/email";
import { CustomsendVerificationRequest } from "../../../lib/signinemail";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier, url, provider }) {
        CustomsendVerificationRequest({ identifier, url, provider });
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/signin",
    verifyRequest: "/verify-request",
    // newUser: "/onboarding", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({
      session,
      user,
    }: {
      session: any | undefined;
      user: any | undefined;
    }) {
      session.user.id = user.id;

      const dbUser = await prisma.user.findFirst({
        where: {
          id: user.id,
        },
      });

      session.user.isSubscribed = dbUser?.isSubscribed;
      session.user.stripeCustomerId = dbUser?.stripeCustomerId;

      return session;
    },
    async redirect({
      url,
      baseUrl,
    }: {
      url: any | undefined;
      baseUrl: any | undefined;
    }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  events: {
    createUser: async ({ user }: { user: any | undefined }) => {
      // Create stripe API client using the secret key env variable
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2022-11-15",
      });

      // Create a stripe customer for the user with their email address
      await stripe.customers
        .create({
          email: user.email!,
        })
        .then(async (customer) => {
          // Use the Prisma Client to update the user in the database with their new Stripe customer ID
          return prisma.user.update({
            where: { id: user.id },
            data: {
              stripeCustomerId: customer.id,
            },
          });
        });
    },
  },
};
export default NextAuth(authOptions);
