import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection'; 
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import WorkProcess from '../components/WorkProcess';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <>
      <Navigation />
      
     <HeroSection 
        title="Our Services"
        subtitle="We offer a wide range of services to meet your needs."
      />
      <ServicesSection />
      <WhyChooseUs />
      <WorkProcess />
      <CTASection />
      <Footer />
    </>
  );
};

export default Services;
