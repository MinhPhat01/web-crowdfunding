import "@/styles/styles.css";
import type { AppProps } from "next/app";

import { type EmotionCache, CacheProvider } from "@emotion/react";

import { ThemeProvider } from "@/contexts";
import { createEmotionCache } from "@/utils";
import { Head } from "@/hocs";

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
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
