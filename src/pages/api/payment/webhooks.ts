import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import prisma from "../../../lib/prisma";

const endpointSecret = process.env.STRIPE_SIGNING_SECRET as string;

export const config = {
  api: {
    bodyParser: false, // don't parse body of incoming requests because we need it raw to verify signature
  },
};

const StripeWebhooks = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const requestBuffer = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
      apiVersion: "2022-11-15",
    });

    let event;

    try {
      // Use the Stripe SDK and request info to verify this Webhook request actually came from Stripe
      event = stripe.webhooks.constructEvent(
        requestBuffer.toString(), // Stringify the request for the Stripe library
        sig,
        endpointSecret
      );
    } catch (err: any) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.status(400).send(`Webhook signature verification failed.`);
    }

    // Extract the subscription object from the event
    const subscription = event.data.object as Stripe.Subscription;
    const customerId = subscription.customer as string;

    // Handle the event
    switch (event.type) {
      // Handle successful subscription creation
      case "customer.subscription.created": {
        await prisma.user.update({
          // Find the customer in our database with the Stripe customer ID linked to this purchase
          where: {
            stripeCustomerId: customerId,
          },
          // Update that customer so their status is now active
          data: {
            isSubscribed: true,
          },
        });
        break;
      }
      case "customer.subscription.updated": {
        await prisma.user.update({
          where: {
            stripeCustomerId: customerId,
          },
          data: {
            isSubscribed: true,
          },
        });
        break;
      }
      case "customer.subscription.deleted": {
        await prisma.user.update({
          where: {
            stripeCustomerId: customerId,
          },
          data: {
            isSubscribed: false,
          },
        });
        break;
      }
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.status(200).json({ received: true });
  } catch (err) {
    // Return a 500 error
    console.log(err);
    res.status(500).end();
  }
};

export default StripeWebhooks;
