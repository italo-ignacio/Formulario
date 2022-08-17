import type { AppProps } from "next/app";
import Head from "next/head";
import { AuthProvider } from "../src/contexts/auth";
import GlobalStyles from "../src/styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Formulário</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
