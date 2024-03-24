import { initMSW } from "@/mocks";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MSWProvider from "../components/MSWProvider";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MSWProvider>
      <Component {...pageProps} />
    </MSWProvider>
  );
}
