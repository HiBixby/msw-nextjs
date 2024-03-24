import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MSWProvider from "../components/MSWProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MSWProvider>
      <Component {...pageProps} />
    </MSWProvider>
  );
}
