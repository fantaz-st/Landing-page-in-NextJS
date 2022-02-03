import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return <Box sx={styles.layout}>{children}</Box>;
};

export default Layout;

const styles = {
  layout: { maxWidth: '1200px', margin: '0 auto', flex: '1', padding: { md: '0', xs: '0 1rem' } },
};
