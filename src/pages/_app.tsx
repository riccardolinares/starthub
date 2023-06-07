import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { project } from "../utils/data";

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider
        // Provider options are not required but can be useful in situations where
        // you have a short session maxAge time. Shown here with default values.
        session={pageProps.session}
      >
        <Head>
          <title>{project.title}</title>
          {/* Primary Meta Tags */}
          <meta name="title" content={project.title} />
          <meta name="description" content={project.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={project.url} />
          <meta property="og:title" content={project.title} />
          <meta property="og:description" content={project.description} />
          <meta property="og:image" content={project.image} />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={project.url} />
          <meta property="twitter:title" content={project.title} />
          <meta property="twitter:description" content={project.description} />
          <meta property="twitter:image" content={project.image} />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
