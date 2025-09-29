import "@/styles/globals.css";
import {
  QueryClient,
  QueryClientProvider,
  hydrate,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  if (pageProps.dehydrateState) {
    hydrate(queryClient, pageProps.dehydrateState);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Medianndev posts app</title>
        <link rel="icon" href="/mediannLogo.svg" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
