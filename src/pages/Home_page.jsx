import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjects from '../components/FeaturedProjects';
import WhyChooseUs from '../components/WhyChooseUs';
//import ClientTestimonials from '../components/ClientTestimonials';
import WorkProcess from '../components/WorkProcess';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      {/*<FeaturedProjects />*/}
      <WhyChooseUs />
      <WorkProcess />
      <CTASection />
    </>
  );
};

export default Home;