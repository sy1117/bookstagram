// import App from 'next/app'

import "@bookstagram/components/dist/main.css";

import { ApolloProvider, useApolloClient } from "@apollo/client/react";
import React from "react";
import { client } from "../apollo/config";
import { AppProps } from "next/app";
import Layout from "../layout/Layout";
import { Icons } from "@bookstagram/components";

const { IconHome, IconDirect, IconExplore, IconActivity } = Icons;

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  if (router.route === "/_error") {
    return <Component {...pageProps} />;
  }
  if (router.route === "/log-in" || router.route === "/log-out") {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
