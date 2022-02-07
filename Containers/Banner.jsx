import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Layout from '../Components/Layout/Layout';

import bannerImage from '../public/images/image2.png';
const Banner = () => {
  return (
    <Layout>
      <Box sx={styles.banner}>
        <Box sx={styles.banner__text}>
          <Typography variant="h2">Designed & Built by the latest code integration</Typography>
          <Typography variant="body2">
            Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.
            Get your tests delivered at let home collect sample.
          </Typography>
          <Button variant="contained" sx={{ alignSelf: 'flex-start', marginTop: '2rem' }}>
            Get Started
          </Button>
        </Box>
        <Box sx={styles.banner__image}>
          <Image className="lol" src={bannerImage} layout="responsive" objectFit="cover" quality={100} alt="banner" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Banner;

const styles = {
  banner: {
    height: '100%',
    width: '100%',
    padding: '5rem 0',
    display: 'grid',
    gridTemplateColumns: ['1fr', '1fr', '1fr 1fr', '2fr 3fr'],
  },
  banner__text: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
  },
  banner__image: {
    display: 'block',
  },
};
