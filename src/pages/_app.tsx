import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { seoConfig } from "../utils/seoConfig";
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:url" content={seoConfig.url} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
