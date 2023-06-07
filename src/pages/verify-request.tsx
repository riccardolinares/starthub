import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import Link from "next/link";
import SigninLayout from "@/components/templates/SigninLayout";

function Login() {
  return (
    <SigninLayout>
      <h1 className="text-2xl font-bold">Check your email</h1>
      <p className="mt-6 mb-8">
        We&apos;ve sent an email to the address you provided. Please check your
        inbox and click the link in the email to confirm your email address.
      </p>
      <p className="text-sm text-gray-500">
        If you haven&apos;t received the email please check your spam folder or{" "}
        <Link href="/signin" className="text-primary">
          ask us to send another
        </Link>
      </p>
    </SigninLayout>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
