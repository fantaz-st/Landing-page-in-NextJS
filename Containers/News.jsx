import Layout from '../Components/Layout/Layout';

import { Box, Typography, Button } from '@mui/material';

import news1 from '../public/images/news/news1.png';
import news2 from '../public/images/news/news2.png';
import news3 from '../public/images/news/news3.png';
import Image from 'next/image';

const news = [
  { id: '1', title: 'Ui/UX industry are doing great job in previous year history', image: news1 },
  { id: '2', title: 'New banking application has developed and we expecting good feedback', image: news2 },
  { id: '3', title: 'Develop your design experience with figma features.', image: news3 },
];

const NewsCard = ({ title, image }) => {
  return (
    <Box sx={styles.news__card}>
      <Box sx={{ borderRadius: '1rem', overflow: 'hidden' }}>
        <Image src={image} alt={title} objectFit="cover" width={5} height={3} layout="responsive" quality={100} loading="lazy" />
      </Box>
      <Typography variant="body3">{title}</Typography>
      <Typography variant="link3">Learn More</Typography>
    </Box>
  );
};

const News = () => {
  return (
    <Layout id="news">
      <Box sx={styles.news__text}>
        <Typography variant="h2">Latest newsfeed</Typography>
        <Typography variant="h4">Our recent updated blog posts</Typography>
      </Box>
      <Box sx={styles.grid}>
        {news.map((cur) => (
          <NewsCard key={cur.id} title={cur.title} image={cur.image} />
        ))}
      </Box>
    </Layout>
  );
};

export default News;

const styles = {
  news__text: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridGap: '3rem',
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(3,1fr)'],
  },
  news__card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
};
