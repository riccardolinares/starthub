import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import Stripe from "stripe";
import { authOptions } from "../auth/[...nextauth]";

import prisma from "../../../lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

const StripeCustomerPortal = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).send({
      error: "Unauthorized",
    });
  }

  const email = session.user.email;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  console.log("user", user);
  await prisma.$disconnect();

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: user!.stripeCustomerId as string,
    return_url: process.env.CLIENT_URL + "/dashboard",
  });

  res.send({
    url: stripeSession.url,
  });
};

export default StripeCustomerPortal;
