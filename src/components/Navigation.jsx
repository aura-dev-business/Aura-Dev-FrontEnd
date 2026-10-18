import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import QuoteModal from './QuoteComponent';

const links = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPresent, setMenuPresent] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const menuWasOpenRef = useRef(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuPresent ? 'hidden' : '';
    if (menuOpen) menuWasOpenRef.current = true;
    if (!menuOpen && menuWasOpenRef.current) {
      menuButtonRef.current?.focus?.();
      menuWasOpenRef.current = false;
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, menuPresent]);

  const openMenu = () => {
    setMenuPresent(true);
    setMenuOpen(true);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const active = (path) => location.pathname === path;
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 text-gray-950" aria-label="AuraDev home">
          <img src={logo} alt="AuraDev" className="h-10 w-10 object-contain" />
          <span className="leading-none"><strong className="block font-aspal text-2xl">AuraDev</strong><small className="text-[10px] text-gray-500">Build Your Digital Aura</small></span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => <Link key={link.path} to={link.path} className={`rounded-full px-4 py-2 text-sm transition-colors ${active(link.path) ? 'bg-gray-950 text-white' : 'text-gray-700 hover:bg-black/5 hover:text-black'}`}>{link.label}</Link>)}
        </div>
        <button type="button" onClick={() => setQuoteOpen(true)} className="hidden rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9b5bd6] lg:block">Get in touch</button>
        <button ref={menuButtonRef} type="button" onClick={openMenu} className="rounded-full p-2 text-gray-950 hover:bg-black/5 lg:hidden" aria-label="Open menu" aria-expanded={menuOpen} aria-controls="mobile-navigation"><Menu size={24}/></button>
      </nav>
    </header>
    <AnimatePresence onExitComplete={() => setMenuPresent(false)}>
      {menuOpen && <motion.div
        id="mobile-navigation"
        className="fixed inset-0 z-[60] overflow-y-auto bg-[#f8f8f6] lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        initial={reduceMotion ? false : { opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: '100%' }}
        transition={{ duration: reduceMotion ? 0 : 0.48, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="flex h-20 items-center justify-between border-b border-black/10 px-5"
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ delay: reduceMotion ? 0 : 0.12, duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
        ><span className="font-aspal text-2xl text-gray-950">AuraDev</span><button type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); closeMenu(); }} className="rounded-full p-2 text-gray-950 hover:bg-black/5" aria-label="Close menu"><X size={24}/></button></motion.div>
        <motion.div
          className="flex min-h-[calc(100dvh-5rem)] flex-col px-5 pb-8 pt-8"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.075, delayChildren: reduceMotion ? 0 : 0.16 } } }}
        >
          {links.map((link) => <motion.div key={link.path} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] } } }}><Link to={link.path} className={`block border-b border-black/10 py-4 text-[clamp(2rem,9vw,3rem)] tracking-tight ${active(link.path) ? 'text-[#9b5bd6]' : 'text-gray-950'}`}>{link.label}</Link></motion.div>)}
          <motion.button type="button" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.38, ease: [0.16, 1, 0.3, 1] } } }} onClick={() => { closeMenu(); setQuoteOpen(true); }} className="mt-auto rounded-full bg-gray-950 px-6 py-4 text-sm font-medium text-white">Start a project</motion.button>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
    <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
  </>;
}
