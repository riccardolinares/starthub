import React from "react";
// import Image from "next/image";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import SigninLayout from "../components/templates/SigninLayout";

function Login() {
  return (
    <SigninLayout>
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-gray-500 mt-3 mb-8 font-light">
        Use your email to login
      </p>

      <form
        method="post"
        action="/api/auth/signin/email"
        className="mt-4 register-form text-left"
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.currentTarget.email.value;
          signIn("email", { email, callbackUrl: "/dashboard" });
        }}
      >
        <div className="space-y-4">
          <div className="text-center">
            <label
              htmlFor="email"
              className="mb-2 text-center items-center justify-center"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                className="w-full px-3 py-2 text-base text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md focus:ring focus:ring-opacity-50 focus:ring-primary focus:border-primary"
                placeholder="info@example.com"
                name="email"
                id="email"
                required
                aria-label="email"
              />
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="w-full px-6 py-3 mt-4 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Login
            </button>
          </div>
        </div>
      </form>
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
