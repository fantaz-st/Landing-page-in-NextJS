import { Box, Button, Typography } from '@mui/material';

import { Link as ReactScrollLink } from 'react-scroll';
import Layout from '../Layout/Layout';
import Logo from '../Logo/Logo';

const menuItems = [
  {
    path: 'hero',
    label: 'Home',
  },
  {
    path: 'features',
    label: 'Features',
  },
  {
    path: 'testimonials',
    label: 'Testimonials',
  },
  {
    path: 'faq',
    label: 'FAQ',
  },
  {
    path: 'news',
    label: 'News',
  },
];

const Navbar = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Layout>
        <Box sx={styles.container}>
          <Logo sx={styles.logo} />
          <Box as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }) => (
              <ReactScrollLink to={path} activeClass="active" spy={true} smooth={true} key={path} duration={500}>
                <Typography sx={styles.navLink}>{label}</Typography>
              </ReactScrollLink>
            ))}
          </Box>
          <Button variant="outlined">Get Started</Button>
        </Box>
      </Layout>
    </Box>
  );
};

export default Navbar;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 0',
    margin: '0 auto ',
  },
  nav: {
    display: ['none', 'none', 'none', 'flex'],
    gap: '1rem',
    cursor: 'pointer',
  },
  navLink: {
    fontSize: '1rem',
    color: '#8D448B',
    fontWeight: '400',
    cursor: 'pointer',
    lineHeight: '1.2',
    transition: '500ms',

    '&:hover, &.active': {
      color: '#fff',
      backgroundColor: 'yellow',
    },
  },
};
