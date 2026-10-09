import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import QuoteModal from './QuoteComponent';

const links = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const active = (path) => location.pathname === path;
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 text-gray-950" aria-label="AuraDev home">
          <img src={logo} alt="" className="h-10 w-10 object-contain" />
          <span className="leading-none"><strong className="block font-aspal text-2xl">AuraDev</strong><small className="text-[10px] text-gray-500">Build Your Digital Aura</small></span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => <Link key={link.path} to={link.path} className={`rounded-full px-4 py-2 text-sm transition-colors ${active(link.path) ? 'bg-gray-950 text-white' : 'text-gray-700 hover:bg-black/5 hover:text-black'}`}>{link.label}</Link>)}
        </div>
        <button type="button" onClick={() => setQuoteOpen(true)} className="hidden rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9b5bd6] md:block">Get in touch</button>
        <button onClick={() => setMenuOpen(true)} className="rounded-full p-2 text-gray-950 hover:bg-black/5 md:hidden" aria-label="Open menu"><Menu size={24}/></button>
      </nav>
    </header>
    <div className={`fixed inset-0 z-[60] bg-[#f8f8f6] transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-hidden={!menuOpen}>
      <div className="flex h-20 items-center justify-between px-5 border-b border-black/10"><span className="font-aspal text-2xl text-gray-950">AuraDev</span><button onClick={() => setMenuOpen(false)} className="rounded-full p-2 text-gray-950 hover:bg-black/5" aria-label="Close menu"><X size={24}/></button></div>
      <div className="flex flex-col px-5 pt-12">{links.map((link) => <Link key={link.path} to={link.path} className={`border-b border-black/10 py-5 text-3xl tracking-tight ${active(link.path) ? 'text-[#9b5bd6]' : 'text-gray-950'}`}>{link.label}</Link>)}<button onClick={() => { setMenuOpen(false); setQuoteOpen(true); }} className="mt-8 self-start rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white">Start a project</button></div>
    </div>
    <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
  </>;
}
