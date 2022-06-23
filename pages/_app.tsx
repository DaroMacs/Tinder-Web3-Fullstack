import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TinderProvider } from "../context/TinderContext";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={"uJAI8rE9CCFNtw8SxRZJsEY0ZRwE54yv8n2x4dy8"}
      serverUrl={"https://lgcmjfhup09c.usemoralis.com:2053/server"}
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
