import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// adding getLayout function to a NextPage Generic

type AppPropswithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// making Component may have getLayout
// study this further

function MyApp({ Component, pageProps }: AppPropswithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
