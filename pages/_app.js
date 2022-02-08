import '../styles/reset.css';
import '../styles/globals.css';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../styles/theme/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>FANTAZ landing</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
