import Image from 'next/image';

import Layout from '../Components/Layout/Layout';
import bannerImage from '../public/images/banner-img2.png';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

import { Box, Typography, Button } from '@mui/material';

import brand1 from '../public/images/brands/evernote.png';
import brand2 from '../public/images/brands/forbes.png';
import brand3 from '../public/images/brands/geekwire.png';
import brand4 from '../public/images/brands/slack.png';

const brands = [
  {
    title: 'Evernote',
    icon: brand1,
  },
  {
    title: 'Forbes',
    icon: brand2,
  },
  /* {
    title: 'GeekWire',
    icon: brand3,
  }, */
  {
    title: 'Slack',
    icon: brand4,
  },
];

const Hero = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Layout>
        <Box id="hero" sx={styles.hero}>
          <Box sx={styles.hero__text}>
            <Typography variant="h1">Experience your ultimate mobile application</Typography>
            <Typography variant="body1">
              Get your blood tests delivered at let home collect sample from the victory of the managements that supplies best design system
              guidelines ever.
            </Typography>
            <Box sx={styles.buttonBox}>
              <Button variant="contained">Get Started</Button>
              <Button variant="text" startIcon={<PlayCircleFilledIcon />}>
                Watch Video
              </Button>
            </Box>
          </Box>
          <Box sx={styles.hero__image}>
            <Image src={bannerImage} objectFit="contain" layout="fill" quality={100} alt="hero banner" />
          </Box>
          <Box sx={styles.trustedby}>
            <Typography sx={{ flexGrow: '1' }} variant="body3">
              Trusted by companies like:
            </Typography>
            {brands.map((brand) => (
              <Image src={brand.icon} key={brand.title} alt={brand.title} heigth="40px" width="100px" objectFit="contain" />
            ))}
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Hero;

const styles = {
  hero: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: ['1fr', '1fr', '1fr 1fr', '1fr 1fr'],
    gridGap: '0',
    padding: '5rem 0 2rem 0',
  },
  buttonBox: { marginTop: '3rem', display: 'flex', gap: '2rem' },
  hero__image: {
    position: 'relative',
  },
  trustedby: {
    marginTop: '4rem',
    display: 'flex',
    position: 'relative',
    gap: '1rem',
    alignItems: 'center',
  },
  /* hero__image: {
    position: 'relative',
    top: ['0', '0', '0', '-8rem', '-8rem'],
    maxWidth: '100%',
    overflow: 'hidden',
  } */
};
