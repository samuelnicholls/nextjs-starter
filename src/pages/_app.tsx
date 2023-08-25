import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { SWRConfig } from 'swr';
import { fetcher } from '@/utils';

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />
    </SWRConfig>

  );
}

export default App;
