import { Box, List, Typography, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import React from 'react';
import Layout from '../Components/Layout/Layout';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ScaleUp } from '../helpers/framerAnimations';

const priceCard = [
  {
    name: 'Lite',
    price: 'Free',
    pricePostfix: 'with restrictions',
    features: ['Manage conversations directly from your websites optimization', 'Unlimited links', 'Chat promt supported'],
  },
  {
    name: 'Pro',
    price: '16.99',
    pricePostfix: 'monthly',
    features: ['Manage conversations directly from your websites optimization', 'Unlimited links', 'Chat promt supported', 'Optimized hashtags'],
  },
  {
    name: 'Enterprise',
    price: '99.99',
    pricePostfix: 'monthly',
    features: [
      'Manage conversations directly from your websites optimization',
      'Unlimited links',
      'Chat promt supported',
      'Optimized hashtags',
      'Own analytics platform',
    ],
  },
];

const PriceCard = ({ card: { name, price, pricePostfix, features } }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Typography variant="h3">{name}</Typography>
        <Box>
          <Typography variant="h3">{price}</Typography>
          <Typography variant="body3">{pricePostfix}</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="body3" sx={{ fontWeight: 'bold' }}>
          Plan includes
        </Typography>
        <List>
          {features.map((feature, i) => (
            <ListItem key={i}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: '#1e88e5' }} />
              </ListItemIcon>
              <Typography variant="body3">{feature}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={styles.divider} />
      <Button variant="contained">Start 14 days trial</Button>
    </Box>
  );
};

const Pricinig = () => {
  return (
    <Box sx={{ backgroundColor: '#F6F8FB' }}>
      <Layout id="pricing">
        <Box sx={styles.pricing__text}>
          <Typography variant="h2">Pricing Plan</Typography>
          <Typography variant="h4">Choose your pricing policy</Typography>
        </Box>
        <Box sx={styles.grid}>
          {priceCard.map((card, i) => (
            <ScaleUp key={card.name} multiplier={i * 0.5}>
              <PriceCard card={card} />
            </ScaleUp>
          ))}
        </Box>
      </Layout>
    </Box>
  );
};

export default Pricinig;

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(3,1fr)'],
    gridGap: '3rem',
  },
  pricing__text: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
    transition: `
transform 250ms ease,
box-shadow 250ms ease,
color 250ms ease
`,
    boxShadow: `1px 1px 5px 0 rgba(1,1,1,.05)`,
    '&:hover': {
      transform: `translateY(-0.25rem)`,
      boxShadow: `
      0px 2px 4px rgba(46,41,51,0.08),
      0px 5px 10px rgba(71,63,79,0.16)
    `,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  divider: {
    width: '100%',
    content: "''",
    height: '1px',
    backgroundColor: '#c4c4c4',
    margin: '1rem 0',
  },
};
