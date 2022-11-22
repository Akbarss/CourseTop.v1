import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';

import '../styles/globals.css';
import Head from 'next/head';
import createEmotionCache from '../client/lib/createEmotionCache';
import ThemeProvider from '../client/lib/theme';
import { Provider } from 'react-redux';
import { store } from '../shared/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CustomProps extends AppProps {
  pageProps: { session: any };
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App(props: CustomProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <SessionProvider session={props.pageProps.session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Provider store={store}>
          <ThemeProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </ThemeProvider>
        </Provider>
      </CacheProvider>
    </SessionProvider>
  );
}
