import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home_page";
const Services = lazy(() => import("./pages/Service_page"));
const About_us = lazy(() => import("./pages/About_us"));
const Work = lazy(() => import("./pages/Work"));
const SculptCaseStudy = lazy(() => import("./pages/SculptCaseStudyNew"));
const StayZyCaseStudy = lazy(() => import("./pages/StayZyCaseStudyNew"));
const PearlOudCaseStudy = lazy(() => import("./pages/PearlOudCaseStudyNew"));
const MercantileCaseStudy = lazy(() => import("./pages/MercantileCaseStudyNew"));
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

// Hero-only word mask reveal. It is intentionally isolated from all other text.
if (typeof window !== "undefined") {
  const prepareHeroWordReveal = () => {
    document.querySelectorAll("main h1").forEach((heading) => {
      if (heading.dataset.wordMaskReady || !heading.textContent?.trim()) return;

      if (window.location.pathname === "/" && heading.closest(".aura-hero-inner")) {
        const hero = heading.closest(".aura-hero-inner");
        heading.textContent = "We solve problems with creativity anywhere they exist, spanning advertising, brand strategy, experience, design, and much more.";
        [...hero.querySelectorAll("p")].forEach((paragraph) => paragraph.remove());
        [...hero.querySelectorAll("span, div")]
          .filter((element) => element.children.length === 0 && element.textContent.trim().toLowerCase() === "independent digital studio")
          .forEach((element) => element.remove());

        let follow = hero.querySelector(".home-hero-follow");
        if (!follow) {
          follow = document.createElement("div");
          follow.className = "home-hero-follow";
          hero.appendChild(follow);
        }
        let copy = follow.querySelector(".home-hero-copy");
        if (!copy) {
          copy = document.createElement("p");
          copy.className = "home-hero-copy";
        }
        copy.textContent = "Brand design, web design, digital marketing, UX/UI design and web development, from our studios in Dubai, Qatar, UK and Bangalore.";
        const action = hero.querySelector("a, button");
        action?.classList.add("home-hero-cta");
        follow.replaceChildren(copy, ...(action ? [action] : []));

        const forceStyle = (element, declarations) => {
          if (!element) return;
          Object.entries(declarations).forEach(([property, value]) => element.style.setProperty(property, value, "important"));
        };
        forceStyle(hero, {
          position: "static",
          display: "flex",
          "flex-direction": "column",
          "align-items": "stretch",
          "min-height": "0",
          padding: "10rem 4.15vw 4rem",
        });
        forceStyle(heading, {
          position: "static",
          inset: "auto",
          transform: "none",
          width: "100%",
          "max-width": "1500px",
          margin: "0",
          padding: "0",
        });
        forceStyle(follow, {
          position: "static",
          inset: "auto",
          display: "flex",
          "flex-direction": "row",
          "justify-content": "space-between",
          "align-items": "center",
          gap: "1.5rem",
          width: "100%",
          margin: "3.5rem 0 0",
          padding: "0",
        });
        forceStyle(copy, {
          position: "static",
          inset: "auto",
          display: "block",
          "max-width": "780px",
          margin: "0",
          padding: "0",
        });
        forceStyle(action, {
          position: "static",
          inset: "auto",
          display: "inline-flex",
          margin: "0",
        });
        if (window.matchMedia("(max-width: 640px)").matches) {
          forceStyle(hero, { padding: "7rem 1.25rem 3rem" });
          forceStyle(follow, { "flex-direction": "column", "align-items": "flex-start" });
        }
      }

      const headline = heading.textContent.trim();
      heading.dataset.wordMaskReady = "true";
      heading.setAttribute("aria-label", headline);
      heading.replaceChildren();

      const isHomeHeadline = window.location.pathname === "/" && heading.closest(".aura-hero-inner");
      const headlineLines = isHomeHeadline
        ? [
            "We solve problems with creativity",
            "anywhere they exist, spanning",
            "advertising, brand strategy,",
            "experience, design, and much more.",
          ]
        : [headline];
      let wordIndex = 0;
      headlineLines.forEach((line, lineIndex) => {
        const lineElement = document.createElement("span");
        lineElement.className = "hero-headline-line";
        const words = line.split(/\s+/);
        words.forEach((word, index) => {
          const mask = document.createElement("span");
          mask.className = "hero-word-mask";
          const inner = document.createElement("span");
          inner.className = "hero-word";
          inner.style.setProperty("--i", wordIndex);
          inner.setAttribute("aria-hidden", "true");
          inner.textContent = word;
          mask.appendChild(inner);
          lineElement.appendChild(mask);
          if (index < words.length - 1) lineElement.appendChild(document.createTextNode(" "));
          wordIndex += 1;
        });
        heading.appendChild(lineElement);
        if (lineIndex < headlineLines.length - 1) heading.appendChild(document.createTextNode(" "));
      });

      const hero = heading.closest(".aura-hero-inner, .studio-hero .studio-shell, .work-gallery-hero .studio-shell, section, main");
      hero?.querySelectorAll(":scope > :not(h1)").forEach((item) => {
        item.classList.add("hero-reveal-rest");
      });
    });
  };

  const scrollWordObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("scroll-word-visible");
      scrollWordObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  const scrollComponentObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("scroll-component-visible");
      scrollComponentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });

  const prepareScrollWordReveal = () => {
    document.querySelectorAll("main h2, main h3, main h4, main p, main li, footer h1, footer h2, footer h3, footer p, footer li").forEach((target) => {
      if (target.dataset.scrollWordReady || target.closest(".aura-hero-inner") || target.children.length) return;
      const copy = target.textContent?.trim();
      if (!copy) return;

      target.dataset.scrollWordReady = "true";
      target.setAttribute("aria-label", copy);
      target.replaceChildren();
      const words = copy.split(/\s+/);
      words.forEach((word, index) => {
        const mask = document.createElement("span");
        mask.className = "scroll-word-mask";
        const inner = document.createElement("span");
        inner.className = "scroll-word";
        inner.style.setProperty("--i", index);
        inner.setAttribute("aria-hidden", "true");
        inner.textContent = word;
        mask.appendChild(inner);
        target.appendChild(mask);
        if (index < words.length - 1) target.appendChild(document.createTextNode(" "));
      });
      target.classList.add("scroll-word-target");
      scrollWordObserver.observe(target);
    });
  };

  const prepareComponentReveal = () => {
    const components = document.querySelectorAll("header, footer, main section, main article, main figure, main img, main button, main a, main [class*='card'], main [class*='Card']");
    components.forEach((component, index) => {
      if (component.dataset.componentRevealReady || component.closest("h1") || component.querySelector(":scope h1")) return;
      component.dataset.componentRevealReady = "true";
      component.style.setProperty("--component-i", index % 7);
      component.classList.add("scroll-component");
      scrollComponentObserver.observe(component);
    });
  };

  const startHeroWordReveal = () => {
    prepareHeroWordReveal();
    prepareScrollWordReveal();
    prepareComponentReveal();
    new MutationObserver(() => {
      prepareHeroWordReveal();
      prepareScrollWordReveal();
      prepareComponentReveal();
    }).observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startHeroWordReveal, { once: true });
  else startHeroWordReveal();
}
import "./components/ResponsiveTypography.css";
import "./components/MobilePolish.css";
import "./components/MobileTypographyFix.css";
import "./components/MobileLayout.css";
import "./components/ControlReset.css";
import "./components/LayoutStability.css";
import "./components/MobileTypeSystem.css";
import "./components/HomeHeroDesktop.css";
import "./components/ResponsiveFoundation.css";
import "./components/ScrollMotion.css";
import "./components/HeroLayoutFix.css";
import "./components/SculptGallery.css";
import "./components/SculptGalleryTop.css";
import "./components/SculptSlider.css";
import sculptCampaign from "./assets/projects/sculpt-pilates-club.jpeg";
import sculptMenu from "./assets/projects/sculpt-menu.jpeg";
import sculptProfile from "./assets/projects/sculpt-profile.jpeg";
import sculptPackage from "./assets/projects/sculpt-package.jpeg";
import sculptSchedule from "./assets/projects/sculpt-schedule.jpeg";

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
      if (target.dataset.wordAnimated) return;
      // Character spans become flex/grid children and can distribute across the full row.
      // Those small layout labels retain their regular reveal while headings keep the letter motion.
      if (['flex', 'inline-flex', 'grid', 'inline-grid'].includes(window.getComputedStyle(target).display)) return;
      const text = target.textContent;
      if (!text?.trim()) return;
      target.dataset.wordAnimated = 'true';
      target.setAttribute('aria-label', text);
      const textNodes = [];
      const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
      });
      while (walker.nextNode()) textNodes.push(walker.currentNode);
      let wordIndex = 0;
      textNodes.forEach((node) => {
        const fragment = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach((token) => {
          if (!token) return;
          if (/^\s+$/.test(token)) {
            fragment.appendChild(document.createTextNode(token));
            return;
          }
          const wordMask = document.createElement('span');
          wordMask.className = 'global-word-mask';
          const word = document.createElement('span');
          word.className = 'global-word';
          word.style.setProperty('--word-delay', `${wordIndex * 88}ms`);
          [...token].forEach((letter) => {
            const span = document.createElement('span');
            span.className = 'global-letter';
            span.setAttribute('aria-hidden', 'true');
            span.textContent = letter;
            word.appendChild(span);
          });
          wordMask.appendChild(word);
          fragment.appendChild(wordMask);
          wordIndex += 1;
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
      const targets = document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6, footer h1, footer h2, footer h3, footer h4, footer h5, footer h6');
      targets.forEach((target) => {
        if (!target.dataset.wordObserved && !target.dataset.wordAnimated && target.textContent?.trim()) {
          target.dataset.wordObserved = 'true';
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

const ScrollMotion = () => {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('aura-motion-ready');
    const targetSelector = 'main .aura-intro, main .aura-services, main .aura-featured-work, main .aura-proof, main .aura-process, main .aura-contact-band, main .studio-section, main .studio-split, main .studio-contact, main .work-gallery-hero, main .work-index-list, main .work-index-note, main .oglas-case, main .sculpt-store-links, main .oglas-details, main .oglas-feature-set, main .oglas-architecture, main .oglas-stack, main .oglas-contribution, main .oglas-next, footer .footer-shell';
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('aura-scroll-in');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    const observeTargets = () => document.querySelectorAll(targetSelector).forEach((target) => {
      if (!target.dataset.auraScrollObserved) {
        target.dataset.auraScrollObserved = 'true';
        target.classList.add('aura-scroll-pending');
        observer.observe(target);
      }
    });
    observeTargets();
    const safetyTimer = window.setTimeout(() => document.querySelectorAll('.aura-scroll-pending').forEach((target) => target.classList.add('aura-scroll-in')), 1200);
    const mutationObserver = new MutationObserver(observeTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const depthTargets = [...document.querySelectorAll('[data-scroll-depth]')];
    let frame = 0;
    const updateDepth = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      depthTargets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const distance = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - viewportCenter) / window.innerHeight));
        const strength = Number(target.dataset.scrollDepth || 0);
        target.style.setProperty('--aura-depth-y', `${Math.round(distance * strength)}px`);
      });
    };
    const requestUpdate = () => { if (!frame) frame = window.requestAnimationFrame(updateDepth); };
    updateDepth();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.clearTimeout(safetyTimer);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [location.pathname]);

  return null;
};

const SculptGallery = () => {
  const location = useLocation();
  const [mount, setMount] = useState(null);
  useEffect(() => {
    if (location.pathname !== '/work/sculpt-pilates-club') return undefined;
    let slot;
    const attach = () => {
      if (slot) return;
      const caseStudy = document.querySelector('[aria-label="SCULPT Pilates Club case study"]');
      const visual = caseStudy?.querySelector('.oglas-visual');
      if (!caseStudy || !visual) return;
      slot = document.createElement('div');
      slot.className = 'sculpt-top-showcase-slot';
      caseStudy.insertBefore(slot, visual);
      setMount(slot);
      observer.disconnect();
    };
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });
    attach();
    return () => { observer.disconnect(); slot?.remove(); setMount(null); };
  }, [location.pathname]);
  if (location.pathname !== '/work/sculpt-pilates-club' || !mount) return null;
  const screens = [[sculptCampaign, 'Campaign'], [sculptSchedule, 'Class schedule'], [sculptPackage, 'Packages'], [sculptProfile, 'Member profile'], [sculptMenu, 'Member menu']];
  return <SculptSliderMount mount={mount} screens={screens} />;
};


const SculptSliderMount = ({ mount, screens }) => {
  const [activeScreen, setActiveScreen] = useState(null);
  const trackRef = useRef(null);
  const screenCount = screens.length;
  const moveScreen = (direction) => setActiveScreen((index) => (index + direction + screenCount) % screenCount);
  useEffect(() => {
    if (activeScreen === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveScreen(null);
      if (event.key === 'ArrowLeft') setActiveScreen((index) => (index - 1 + screenCount) % screenCount);
      if (event.key === 'ArrowRight') setActiveScreen((index) => (index + 1) % screenCount);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeScreen, screenCount]);
  const scrollTrack = (direction) => trackRef.current?.scrollBy({ left: direction * trackRef.current.clientWidth * 0.72, behavior: 'smooth' });
  const gallery = <section className="sculpt-gallery sculpt-gallery-top" aria-label="SCULPT app gallery"><div className="sculpt-gallery-inner"><header className="sculpt-slider-head"><p>Real app screens <span>05</span></p><div><button type="button" onClick={() => scrollTrack(-1)} aria-label="Previous screens"><ChevronLeft size={17}/></button><button type="button" onClick={() => scrollTrack(1)} aria-label="Next screens"><ChevronRight size={17}/></button></div></header><div className="sculpt-slider-track" ref={trackRef}>{screens.map(([source, label], index) => <button type="button" key={label} onClick={() => setActiveScreen(index)}><img src={source} alt={'Open SCULPT Pilates Club ' + label + ' screen'} loading="lazy" /><span><i>{String(index + 1).padStart(2, '0')}</i>{label}</span></button>)}</div></div></section>;
  const viewer = activeScreen !== null && <div className="sculpt-lightbox" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setActiveScreen(null)}><section role="dialog" aria-modal="true" aria-label={screens[activeScreen][1]}><header><p><span>{String(activeScreen + 1).padStart(2, '0')}</span> {screens[activeScreen][1]}</p><button type="button" onClick={() => setActiveScreen(null)} aria-label="Close image viewer"><X size={20}/></button></header><img src={screens[activeScreen][0]} alt={'SCULPT Pilates Club ' + screens[activeScreen][1] + ' screen'}/><footer><button type="button" onClick={() => moveScreen(-1)}><ChevronLeft size={18}/> Previous</button><span>{activeScreen + 1} / {screens.length}</span><button type="button" onClick={() => moveScreen(1)}>Next <ChevronRight size={18}/></button></footer></section></div>;
  return <>{createPortal(gallery, mount)}{viewer && createPortal(viewer, document.body)}</>;
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
      <a className="aura-skip-link" href="#main-content">Skip to content</a>
      <ScrollToTop/>
      <ScrollMotion />
      <Navigation/>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About_us/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/work/sculpt-pilates-club" element={<SculptCaseStudy/>} />
          <Route path="/work/stayzy" element={<StayZyCaseStudy/>} />
          <Route path="/work/pearl-and-oud" element={<PearlOudCaseStudy/>} />
          <Route path="/work/mercantile" element={<MercantileCaseStudy/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/Services" element={<Navigate replace to="/services" />} />
          <Route path="/About_us" element={<Navigate replace to="/about" />} />
          <Route path="/Contact" element={<Navigate replace to="/contact" />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
      <SculptGallery />
      <Footer/>
      <TopButton/>
      <WhatsAppButton/>
    </Router>
    
  );
};

export default App;
