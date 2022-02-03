import '../styles/reset.css';
import '../styles/globals.css';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../styles/theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
