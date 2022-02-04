import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper';
import { Box, Typography } from '@mui/material';

import { testimonials } from '../Components/TestimonialsData';
import Layout from '../Components/Layout/Layout';
import TestimonialCard from '../Components/Cards/TestimonialCard';

const Testimonials = () => {
  return (
    <Layout>
      <Box id="testimonials" sx={styles.testimonials}>
        <Box sx={styles.testimonials__text}>
          <Typography variant="h2">Customer Comments</Typography>
          <Typography variant="h4">Why our customers love us</Typography>
        </Box>
        <Box>
          <Swiper
            autoplay={{ delay: '3000' }}
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              el: '.my-custom-pagination-div',
              clickable: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '"></span>';
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            /*  xs: 375,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280, */
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
      <Box sx={styles.bullets} className="my-custom-pagination-div"></Box>
    </Layout>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    userSelect: 'none',
  },
  testimonials__text: {
    textAlign: 'center',
  },
  bullets: {
    content: "''",
    textAlign: 'center',
    paddingTop: '1rem',
  },
};
