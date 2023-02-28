import "@/styles/styles.css";
import type { AppProps } from "next/app";

import { type EmotionCache, CacheProvider } from "@emotion/react";

import { Head } from "@/hocs";
import { ThemeProvider } from "@/contexts";
import { createEmotionCache } from "@/utils";

import { Layout } from "@/compositions";

const clientSideEmotionCache = createEmotionCache();

ThemeProvider;

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { pageProps, Component, emotionCache = clientSideEmotionCache } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head />
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
