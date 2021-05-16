import App from "next/app";
import "@bookstagram/components/dist/main.css";
import { ApolloProvider } from "@apollo/client/react";
import React from "react";
import { client } from "../config/apollo/config";
import { AppProps } from "next/app";
import HeaderLayout from "../layout/HeaderLayout";
import { useWhoAmIQuery } from "../apollo/__generated__/models";

const MyApp = ({ Component, pageProps, router, ...extra }: AppProps) => {
  const { loading, data } = useWhoAmIQuery({
    client,
  });

  const isLoggedIn = data?.whoAmI.__typename === "User";

  if (loading) {
    return <div>loading...</div>;
  }

  if (router.route === "/_error") {
    return <Component {...pageProps} />;
  }

  if (!isLoggedIn && !["/log-in", "/log-out"].includes(router.route)) {
    router.push("/log-in");
  }

  if (isLoggedIn && ["/log-in", "/log-out"].includes(router.route)) {
    router.push("/");
  }

  if (!isLoggedIn) {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
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
function authVar(authVar: any) {
  throw new Error("Function not implemented.");
}
function withSession(
  arg0: ({
    req,
    res,
  }: {
    req: any;
    res: any;
  }) => Promise<
    | {
        redirect: { destination: string; permanent: boolean };
        props?: undefined;
      }
    | { props: { user: any }; redirect?: undefined }
  >,
) {
  throw new Error("Function not implemented.");
}
