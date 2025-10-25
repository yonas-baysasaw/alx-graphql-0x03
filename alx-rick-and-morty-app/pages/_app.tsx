import "@/styles/globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import client from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
