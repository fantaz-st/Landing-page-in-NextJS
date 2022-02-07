import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Containers/Banner';
import Faq from '../Containers/Faq';
import Features from '../Containers/Features';
import Footer from '../Containers/Footer';
import Hero from '../Containers/Hero';
import Testimonials from '../Containers/Testimonials';

import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { AppBar } from '@mui/material';

import ScrollToColor02 from '../helpers/scrollToColor';

import ScrollTop from '../helpers/scrollToTop';
import Pricinig from '../Containers/Pricinig';

const Home = (props) => {
  return (
    <>
      <ScrollToColor02 {...props}>
        <AppBar>
          <Navbar />
        </AppBar>
      </ScrollToColor02>
      <div id="back-to-top-anchor" />
      <Hero />
      <Features />
      <Banner />
      <Testimonials />
      <Faq />
      <Pricinig />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </>
  );
};

export default Home;
