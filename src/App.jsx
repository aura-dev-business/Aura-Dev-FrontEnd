import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
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
import "./components/GlobalLetterReveal.css";
import "./components/ResponsiveTypography.css";
import "./components/MobilePolish.css";
import "./components/MobileTypographyFix.css";
import "./components/MobileLayout.css";
import "./components/ControlReset.css";
import "./components/MobileTypeSystem.css";
import "./components/HomeHeroDesktop.css";

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

const ContentLetterReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const animateText = (target) => {
      if (target.dataset.letterAnimated || target.querySelector('.letter-reveal')) return;
      const text = target.textContent;
      if (!text?.trim()) return;
      target.dataset.letterAnimated = 'true';
      target.setAttribute('aria-label', text);
      const textNodes = [];
      const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
      });
      while (walker.nextNode()) textNodes.push(walker.currentNode);
      let letterIndex = 0;
      textNodes.forEach((node) => {
        const fragment = document.createDocumentFragment();
        [...node.textContent].forEach((letter) => {
          const span = document.createElement('span');
          span.className = 'global-letter';
          span.setAttribute('aria-hidden', 'true');
          span.textContent = letter === ' ' ? '\u00a0' : letter;
          span.style.setProperty('--letter-delay', `${Math.min(letterIndex * 15, 1250)}ms`);
          fragment.appendChild(span);
          letterIndex += 1;
        });
        node.replaceWith(fragment);
      });
    };

    const viewportObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateText(entry.target);
        viewportObserver.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

    const observeNewText = () => {
    const targets = document.querySelectorAll('main h1, main h2, main h3, main h4, main p, main li, footer h2, footer p');
      targets.forEach((target) => {
        if (!target.dataset.letterObserved && !target.dataset.letterAnimated && !target.querySelector('.letter-reveal') && target.textContent?.trim()) {
          target.dataset.letterObserved = 'true';
          viewportObserver.observe(target);
        }
      });
    };

    const frame = window.requestAnimationFrame(observeNewText);
    const mutationObserver = new MutationObserver(observeNewText);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return () => { window.cancelAnimationFrame(frame); viewportObserver.disconnect(); mutationObserver.disconnect(); };
  }, [location.pathname]);

  return null;
};

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
      <ContentLetterReveal />
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
