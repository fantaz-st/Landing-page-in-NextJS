import { Box, Button, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';

import { Link as ReactScrollLink } from 'react-scroll';
import Layout from '../Layout/Layout';
import Logo from '../Logo/Logo';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

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
    path: 'pricing',
    label: 'Pricing',
  },
  {
    path: 'news',
    label: 'News',
  },
  {
    path: 'faq',
    label: 'FAQ',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const list = () => {
    return (
      <Box sx={styles.drawer} role="presentation" onClick={(e) => setMenuOpen(false)} onKeyDown={(e) => setMenuOpen(false)}>
        <Logo />
        <List>
          {menuItems.map(({ path, label }) => (
            <ReactScrollLink
              to={path}
              activeClass="active"
              spy={true}
              smooth={true}
              key={path}
              duration={500}
              offset={-70}
              onClick={(e) => setMenuOpen(false)}
            >
              <ListItem sx={styles.mobile_link} button>
                {label}
              </ListItem>
            </ReactScrollLink>
          ))}
        </List>
        <Button variant="contained">Get Started</Button>
      </Box>
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Layout style={{ padding: '0' }}>
        <Box sx={styles.container}>
          <Logo sx={styles.logo} />
          <Box as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }) => (
              <ReactScrollLink to={path} activeClass="active" className="scroll-link" spy={true} smooth={true} key={path} duration={500} offset={-50}>
                <Typography variant="link2">{label}</Typography>
              </ReactScrollLink>
            ))}
          </Box>
          <Button sx={{ display: { xs: 'none', md: 'block' } }} variant="outlined">
            Get Started
          </Button>
          <IconButton size="large" edge="start" sx={{ mr: 2, color: '#000', display: { xs: 'block', md: 'none' } }} onClick={openMenu}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={menuOpen} onClose={(e) => setMenuOpen(false)}>
            {list()}
          </Drawer>
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
  drawer: {
    width: '250px',
    padding: '1.3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  nav: {
    display: ['none', 'none', 'none', 'flex'],
    gap: '1rem',
    cursor: 'pointer',
  },
  mobile_link: {
    fontSize: '1rem',
    lineHeight: '1.33rem',
    fontWeight: '600',
    fontFamily: 'Poppins, sans-serif',
  },
};
