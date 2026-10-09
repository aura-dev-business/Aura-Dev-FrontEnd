import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home_page";
const Services = lazy(() => import("./pages/Service_page"));
const About_us = lazy(() => import("./pages/About_us"));
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";
const ContactPage = lazy(() => import("./pages/Contact_us"));
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsappButton";
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));
import "./components/StudioOverrides.css";
import "./components/TrustAnimations.css";
import "./components/SlowMotion.css";

const PageLoader = () => (
  <div className="aura-page-loader" role="status" aria-live="polite">
    <div className="aura-page-loader-grid" />
    <div className="aura-page-loader-content">
      <span className="aura-loader-copy">AuraDev / Digital studio</span>
      <span className="aura-loader-word" aria-label="AuraDev">
        {['A', 'u', 'r', 'a', 'D', 'e', 'v'].map((letter, index) => <i key={`${letter}-${index}`} style={{ '--letter': index }}>{letter}</i>)}
      </span>
      <span className="aura-loader-line" aria-hidden="true" />
    </div>
  </div>
);

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimer = window.setTimeout(() => setShowSplash(false), 3000);
    return () => window.clearTimeout(splashTimer);
  }, []);

  if (showSplash) return <PageLoader />;

  return (
    <Router>
      <ScrollToTop/>
      <Navigation/>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About_us/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/Services" element={<Navigate replace to="/services" />} />
          <Route path="/About_us" element={<Navigate replace to="/about" />} />
          <Route path="/Contact" element={<Navigate replace to="/contact" />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
      <Footer/>
      <TopButton/>
      <WhatsAppButton/>
    </Router>
    
  );
};

export default App;
