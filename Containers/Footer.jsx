import React from 'react';
import { Box, Typography, ListItemText } from '@mui/material';
import Layout from '../Components/Layout/Layout';
import Logo from '../Components/Logo/Logo';

import { aboutUs, ourInformation, myAccount, connect } from '../Components/FooterLinks';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <Layout style={{ marginTop: '1rem', paddingTop: '2rem' }}>
      <Box sx={styles.footer}>
        <Box mb="2rem" sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column' }}>
          <Logo />
          <Typography variant="body3">Terms of Use | Privacy</Typography>
          <Typography variant="body3">{`Copyright © ${new Date().getFullYear()}`}</Typography>
        </Box>
        <Box>
          <Typography my="2rem" variant="body3" sx={{ fontSize: '1rem', fontWeight: '600' }}>
            About Us
          </Typography>
          <ul style={{ marginTop: '1.5rem', padding: '0' }}>
            {aboutUs.map((cur) => (
              <ListItemText key={cur.id}>
                <Link href={cur.link} passHref>
                  <Typography variant="link3">{cur.title}</Typography>
                </Link>
              </ListItemText>
            ))}
          </ul>
        </Box>
        <Box>
          <Typography my="7rem" variant="body3" sx={{ fontSize: '1rem', fontWeight: '600' }}>
            Our Information
          </Typography>
          <ul style={{ marginTop: '1.5rem', padding: '0' }}>
            {ourInformation.map((cur) => (
              <ListItemText key={cur.id}>
                <Link href={cur.link} passHref>
                  <Typography variant="link3">{cur.title}</Typography>
                </Link>
              </ListItemText>
            ))}
          </ul>
        </Box>
        <Box>
          <Typography my="2rem" variant="body3" sx={{ fontSize: '1rem', fontWeight: '600' }}>
            My Account
          </Typography>
          <ul style={{ marginTop: '1.5rem', padding: '0' }}>
            {myAccount.map((cur) => (
              <ListItemText key={cur.id}>
                <Link href={cur.link} passHref>
                  <Typography variant="link3">{cur.title}</Typography>
                </Link>
              </ListItemText>
            ))}
          </ul>
        </Box>
        <Box>
          <Typography my="2rem" variant="body3" sx={{ fontSize: '1rem', fontWeight: '600' }}>
            My Account
          </Typography>
          <ul style={{ marginTop: '1.5rem', padding: '0' }}>
            {connect.map((cur) => (
              <ListItemText key={cur.id}>
                <Image height="15px" width="15px" src={cur.icon} alt={cur.title} />
                <Link href={cur.link} passHref>
                  <Typography variant="link3" sx={{ marginLeft: '0.5rem' }}>
                    {cur.title}
                  </Typography>
                </Link>
              </ListItemText>
            ))}
          </ul>
        </Box>
      </Box>
    </Layout>
  );
};

export default Footer;

const styles = {
  footer: {
    display: 'grid',
    gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)'],
    gridGap: '2rem',
  },
};
