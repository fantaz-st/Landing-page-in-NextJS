import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const TestimonialCard = ({ testimonial: { title, content, name, avatar, stars, twitter } }) => {
  let starArr = [
    ...Array(5)
      .fill(0)
      .map((x, i) => <StarIcon key={i} sx={{ color: '#F6C416' }} />),
  ];
  let numberOfGreys = 5 - stars;

  if (numberOfGreys !== 0) {
    starArr.splice(starArr.length - 1, numberOfGreys, <StarBorderIcon sx={{ color: '#e4e4e4' }} />);
  }
  return (
    <Box sx={styles.testimonial__card}>
      <Box sx={{ display: 'flex' }}>
        {starArr.map((star, i) => (
          <Box key={i}>{star}</Box>
        ))}
      </Box>

      <Typography variant="body3" sx={{ fontWeight: '600', marginBottom: '1rem' }}>
        {title}
      </Typography>
      <Typography variant="body3">{content}</Typography>
      <Box sx={styles.user}>
        <Box sx={styles.rounded}>
          <Image src={avatar} height="60px" width="60px" objectFit="cover" alt={name} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="body3" sx={{ fontWeight: '600' }}>
            {name}
          </Typography>
          <Link href={`https://www.twitter.com/${twitter}`} passHref>
            <Typography variant="link3">{twitter}</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;

const styles = {
  testimonial__card: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e4e4e4',
    borderRadius: '0.3rem',
    padding: '2rem',
    margin: '0 1rem',
    gap: '1.5rem',
  },
  user: { display: 'flex', gap: '1rem' },
  rounded: {
    height: '60px',
    width: '60px',
    borderRadius: '60px',
    overflow: 'hidden',
  },
};
