import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/Herosection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjects from '../components/FeaturedProjects';
import WhyChooseUs from '../components/WhyChooseUs';
//import ClientTestimonials from '../components/ClientTestimonials';
import WorkProcess from '../components/WorkProcess';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ContactComponent from '../components/ContactHero';


const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <WorkProcess />
      <CTASection />
      <ContactComponent/>
    </>
  );
};

export default Home;