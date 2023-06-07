import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const loadPortal = async () => {
  const { data } = await axios.get("/api/payment/customer-portal");
  window.location.href = data.url;
};

const processSubscription = async (priceId: string) => {
  const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
  );
  const { data } = await axios.get(`/api/payment/subscription/${priceId}`);
  await stripe!.redirectToCheckout({ sessionId: data.id });
};

const processPayment = async (priceId: string) => {
  const stripe = await loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
  );
  const { data } = await axios.get(`/api/payment/payment/${priceId}`);
  await stripe!.redirectToCheckout({ sessionId: data.id });
};

export { loadPortal, processSubscription, processPayment };
