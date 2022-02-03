import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Containers/Banner';
import Faq from '../Containers/Faq';
import Features from '../Containers/Features';
import Footer from '../Containers/Footer';
import Hero from '../Containers/Hero';
import Testimonials from '../Containers/Testimonials';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Banner />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
