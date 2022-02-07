import { Box } from '@mui/material';

const Layout = ({ children, ...rest }) => {
  return (
    <Box {...rest} sx={styles.layout}>
      {children}
    </Box>
  );
};

export default Layout;

const styles = {
  layout: { maxWidth: '1200px', margin: '0 auto', flex: '1', padding: '6rem 1rem 3rem 1rem' },
};
