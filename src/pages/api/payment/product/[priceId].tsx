import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import Stripe from "stripe";
import { authOptions } from "../../auth/[...nextauth]";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

const StripeCheckout = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).send({
      error: "Unauthorized",
    });
  }

  const { priceId } = req.query;

  const user = session.user;
  const lineItems = [
    {
      price: priceId,
      quantity: 1,
    },
  ];

  const stripeSession = await stripe.checkout.sessions.create({
    customer: user.stripeCustomerId,
    mode: "payment",
    allow_promotion_codes: true,
    payment_method_types: ["card"],
    tax_id_collection: {
      enabled: true,
    },
    customer_update: {
      name: "auto",
      address: "auto",
    },
    billing_address_collection: "required",
    line_items: lineItems as any,
    success_url: `${process.env.CLIENT_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/?cancelledPayment=true`,
    metadata: {
      userId: user.id,
      // add here any other metadata you need
    },
  });

  res.json({ id: stripeSession.id });
};

export default StripeCheckout;
