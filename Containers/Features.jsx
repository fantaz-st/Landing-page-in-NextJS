import Image from 'next/image';
import { Box, Typography } from '@mui/material';

import icon1 from '../public/images/features/accessibility.svg';
import icon2 from '../public/images/features/messaging.svg';
import icon3 from '../public/images/features/customization.svg';
import icon4 from '../public/images/features/analytics.svg';
import Layout from '../Components/Layout/Layout';

const features = [
  {
    icon: icon1,
    title: 'Use Accessibility',
    text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
  },
  {
    icon: icon2,
    title: 'Help & Support',
    text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
  },
  {
    icon: icon3,
    title: 'User Customization',
    text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
  },
  {
    icon: icon4,
    title: 'Analytics Report',
    text: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
  },
];

const Features = () => {
  return (
    <Box sx={{ backgroundColor: '#F6F8FB' }}>
      <Layout>
        <Box sx={styles.features__container} id="features">
          <Box sx={styles.features__info}>
            <Typography variant="h2">Businesses start with great features</Typography>
            <Typography variant="body2">
              Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.
            </Typography>
          </Box>
          <Box sx={styles.features__flex}>
            {features.map((feature) => (
              <Box sx={styles.feature} key={feature.title}>
                <Box>
                  <Image src={feature.icon} alt={feature.title} height="75px" width="75px" />
                </Box>
                <Typography variant="body3" sx={{ fontWeight: '600' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body3">{feature.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Features;

const styles = {
  features__container: {
    textAlign: 'center',
    padding: '5rem 0',
  },
  features__info: {
    margin: '0 auto',
    width: ['100%', '100%', '50%'],
  },
  features__flex: {
    marginTop: '6rem',
    display: 'grid',
    gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(4, 1fr)'],
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    marginBottom: '2rem',
  },
};
