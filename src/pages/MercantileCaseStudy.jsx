import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowUpRight, Barcode, ChartNoAxesCombined, ChevronLeft, ChevronRight, PackageCheck, ReceiptIndianRupee, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ShowcaseRedesign.css';
import './OglasWork.css';
import './MercantileCaseStudy.css';
import './MercantileMobileFix.css';
import './SculptLiveSite.css';
import dashboardImage from '../assets/projects/mercantile/dashboard.png';
import inventoryImage from '../assets/projects/mercantile/inventory.png';
import loginImage from '../assets/projects/mercantile/login.png';
import posImage from '../assets/projects/mercantile/pos.png';
import purchasesImage from '../assets/projects/mercantile/purchases.png';
import salesImage from '../assets/projects/mercantile/sales.png';

const capabilities = ['POS billing', 'Connected inventory', 'Procurement', 'Role-based operations'];
const features = [
  'Barcode, SKU, product search, quick picks, discounts, held bills, and cash, UPI, card, split-payment, and credit checkout flows.',
  'Products, categories, suppliers, tax rates, reorder levels, stock adjustments, movement history, and structured Excel imports.',
  'Draft-to-paid purchase workflows that replenish inventory when goods are received and preserve a complete operational record.',
  'GST configuration, receipts, CSV exports, customer records, audit activity, and dashboards for sales, stock, and operational decisions.',
];
const stack = [
  ['Frontend', 'Next.js 16, React 19 & TypeScript'],
  ['Styling & data', 'Tailwind CSS 4, TanStack Query & Lucide'],
  ['Backend', 'Spring Boot 3.3, Java 21 & REST APIs'],
  ['Security', 'Spring Security, JWT & role permissions'],
  ['Database', 'PostgreSQL, Spring Data JPA, Hibernate & Flyway'],
  ['Operations', 'SheetJS, Apache POI, CSV exports & jsPDF receipts'],
];
const screens = [
  [loginImage, 'Secure workspace login'],
  [dashboardImage, 'Business dashboard and daily brief'],
  [posImage, 'Barcode-ready billing and POS'],
  [salesImage, 'Completed sales and bill history'],
  [inventoryImage, 'Inventory health and product management'],
  [purchasesImage, 'Supplier purchases and payment tracking'],
];

function LiveProduct() {
  return <section className="sculpt-live mercantile-live" aria-label="Live Mercantile website">
    <div><p>Live product</p><h2>Explore Mercantile<br/><em>live.</em></h2><a href="https://mercantile.auradev.in" target="_blank" rel="noreferrer">Open live website <ArrowUpRight size={17}/></a></div>
    <div className="sculpt-live-frame"><iframe title="Mercantile live website" src="https://mercantile.auradev.in" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"/></div>
  </section>;
}

function ProductGallery() {
  const [viewerIndex, setViewerIndex] = useState(null);
  const trackRef = useRef(null);
  const closeViewer = () => setViewerIndex(null);
  const moveViewer = (direction) => setViewerIndex((index) => (index + direction + screens.length) % screens.length);

  useEffect(() => {
    if (viewerIndex === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') moveViewer(-1);
      if (event.key === 'ArrowRight') moveViewer(1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [viewerIndex]);

  const scrollTrack = (direction) => trackRef.current?.scrollBy({ left: direction * trackRef.current.clientWidth * 0.75, behavior: 'smooth' });

  return <section className="mercantile-gallery" aria-label="Mercantile product screens">
    <header><div><p>Real product screens <span>06</span></p><h2>An operations workspace<br/><em>made for the day-to-day.</em></h2></div><div className="mercantile-gallery-controls"><button type="button" onClick={() => scrollTrack(-1)} aria-label="Previous screens"><ChevronLeft size={18}/></button><button type="button" onClick={() => scrollTrack(1)} aria-label="Next screens"><ChevronRight size={18}/></button></div></header>
    <div className="mercantile-gallery-track" ref={trackRef}>{screens.map(([source, label], index) => <button type="button" key={label} onClick={() => setViewerIndex(index)}><img src={source} alt={'Open Mercantile ' + label} loading="lazy"/><span><i>{String(index + 1).padStart(2, '0')}</i>{label}</span></button>)}</div>
    {viewerIndex !== null && createPortal(<div className="mercantile-lightbox" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closeViewer()}><section role="dialog" aria-modal="true" aria-label={screens[viewerIndex][1]}><header><p><span>{String(viewerIndex + 1).padStart(2, '0')}</span> {screens[viewerIndex][1]}</p><button type="button" onClick={closeViewer} aria-label="Close image viewer"><X size={20}/></button></header><img src={screens[viewerIndex][0]} alt={'Mercantile ' + screens[viewerIndex][1]}/><footer><button type="button" onClick={() => moveViewer(-1)}><ChevronLeft size={18}/> Previous</button><span>{viewerIndex + 1} / {screens.length}</span><button type="button" onClick={() => moveViewer(1)}>Next <ChevronRight size={18}/></button></footer></section></div>, document.body)}
  </section>;
}

function PosPreview() {
  return <div className="oglas-visual mercantile-visual" data-scroll-depth="28">
    <div className="oglas-visual-copy"><span>Retail operations</span><strong>From the checkout counter to the stock room.</strong></div>
    <div className="mercantile-pos"><header><strong>mercantile</strong><span>POS / Counter 01</span></header><div className="mercantile-pos-body"><section><small>Quick sale</small><b>Organic Oats</b><p>SKU · 890100</p><b>Cold Brew Coffee</b><p>SKU · 890241</p><i><Barcode size={19} /> Scan or search products</i></section><aside><small>Current bill</small><p><span>Organic Oats × 2</span><b>₹ 360</b></p><p><span>Cold Brew × 1</span><b>₹ 180</b></p><footer><span>Total incl. GST</span><strong>₹ 540</strong><button type="button">Collect payment <ChevronRight size={14} /></button></footer></aside></div></div>
    <p className="oglas-visual-caption">Illustrative interface · Not a public product screen</p>
  </div>;
}

export default function MercantileCaseStudy() {
  return <main className="oglas-work mercantile-case" id="main-content" tabIndex="-1" data-no-letter-reveal>
    <section className="oglas-work-hero studio-grid"><div className="studio-shell"><Link className="case-back" to="/work"><ArrowLeft size={16} /> All work</Link><p>Retail technology · Commerce operations · Full-stack development</p><h1>Mercan<br /><em>tile.</em></h1><span>Case study / 04</span></div></section>
    <section className="oglas-case studio-shell" aria-label="Mercantile case study"><header className="oglas-case-head"><div><p>Multi-tenant ERP &amp; point-of-sale platform</p><h2>One connected system for everyday retail operations.</h2></div><p>Next.js · React · TypeScript · Spring Boot · PostgreSQL</p></header><LiveProduct/><ProductGallery/><PosPreview/><div className="oglas-case-summary"><p>Mercantile is a full-stack commerce ERP that connects point-of-sale billing, inventory, purchasing, suppliers, customers, analytics, tax configuration, and business administration in one operational platform.</p><div>{capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div></div></section>
    <section className="oglas-details studio-shell" aria-label="Mercantile scope"><article><span>01</span><h3>Sell with speed</h3><p>A focused checkout workspace lets staff search or scan products, apply permitted discounts, attach customers, hold interrupted bills, and complete payment quickly.</p></article><article><span>02</span><h3>Control stock accurately</h3><p>Every sale, received purchase, and controlled adjustment creates an understandable inventory movement, so stock remains connected to real operations.</p></article><article><span>03</span><h3>Operate with visibility</h3><p>Dashboards, searchable sales history, GST controls, low-stock signals, and role permissions help teams make confident decisions.</p></article></section>
    <section className="oglas-feature-set studio-shell" aria-label="Key features delivered"><p>Key features delivered <span>02</span></p><div>{features.map((feature, index) => <article key={feature}><span>{String(index + 1).padStart(2, '0')}</span><h3>{feature}</h3></article>)}</div></section>
    <section className="mercantile-flow studio-shell" aria-label="Connected operational flow"><p>One connected flow <span>03</span></p><div><article><ReceiptIndianRupee size={22}/><strong>Sale completed</strong><span>Billing, payment, GST, receipt</span></article><i aria-hidden="true">→</i><article><PackageCheck size={22}/><strong>Stock updated</strong><span>Inventory and movement history</span></article><i aria-hidden="true">→</i><article><ChartNoAxesCombined size={22}/><strong>Dashboard informed</strong><span>Sales, stock, and activity metrics</span></article></div></section>
    <section className="oglas-architecture studio-shell" aria-label="Architecture and security"><p>Architecture &amp; security <span>04</span></p><div className="oglas-architecture-copy"><h2>Business logic.<br /><em>Built to stay connected.</em></h2><div><p>Mercantile is designed as a multi-tenant application. Each business operates inside its own tenant context, keeping users, settings, products, transactions, and business data separated.</p><p>Backend-enforced JWT authentication, role permissions, validation, tax calculation, inventory movements, purchase lifecycle rules, and audit activity keep the platform reliable beyond the interface.</p></div></div></section>
    <section className="oglas-stack studio-shell" aria-label="Technology stack"><p>Technology stack <span>05</span></p><div className="oglas-stack-table">{stack.map(([area, technology]) => <div key={area}><strong>{area}</strong><span>{technology}</span></div>)}</div></section>
    <section className="oglas-contribution studio-shell"><p>AuraDev contribution</p><div><h2>Operations made<br />clearer <em>by design.</em></h2><p>AuraDev designed and developed Mercantile’s product experience and technical foundation—from checkout interactions and responsive interfaces to backend business rules, tenant isolation, database architecture, inventory movement, procurement, authentication, and reporting.</p></div></section>
    <section className="oglas-next studio-grid"><div className="studio-shell"><p>Need an operational platform built around your business?</p><h2>Let’s build<br /><em>what’s next.</em></h2><Link to="/contact">Start a project <ArrowUpRight size={18} /></Link></div></section>
  </main>;
}
