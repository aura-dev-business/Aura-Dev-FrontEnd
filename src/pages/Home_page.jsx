import React from 'react';
import { ArrowUpRight, Code2, CloudCog, Layers3, Palette, PlugZap, Rocket, Smartphone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home_page.css';
import LetterReveal from '../components/LetterReveal';

const services = [
  { number: '01', icon: Code2, title: 'Website development', text: 'Responsive websites and web applications that are fast, useful, and unmistakably yours.' },
  { number: '02', icon: Smartphone, title: 'Mobile app development', text: 'iOS and Android experiences designed around the people who use them every day.' },
  { number: '03', icon: Layers3, title: 'SaaS development', text: 'Scalable software, portals, and dashboards that create room for your business to grow.' },
  { number: '04', icon: Palette, title: 'UI/UX & product design', text: 'Clear interfaces and user journeys that make complex products feel simple.' },
  { number: '05', icon: PlugZap, title: 'API & integrations', text: 'Reliable connections between your products, payments, CRM, and internal systems.' },
  { number: '06', icon: CloudCog, title: 'Maintenance & IT support', text: 'Launch support, ongoing improvements, and practical technical care after go-live.' },
];
const process = [['01', 'Understand', 'We listen closely to the challenge, people, and opportunity behind your brief.'], ['02', 'Shape', 'We turn the right insights into a clear, confident direction.'], ['03', 'Build', 'We design and develop the details that make the whole experience work.'], ['04', 'Evolve', 'We launch, learn, and improve with your business as it grows.']];

export default function Home() {
  return <main className="aura-home" id="main-content" tabIndex="-1">
    <section className="aura-hero"><div className="aura-orb aura-orb-one" /><div className="aura-orb aura-orb-two" /><div className="aura-grid" />
      <div className="aura-shell aura-hero-inner"><p className="aura-eyebrow"><Sparkles size={14} /> <LetterReveal text="Independent digital studio" delay={0}/></p><h1><LetterReveal text="We turn ambitious" delay={300}/><br /><em><LetterReveal text="ideas into impact." delay={840}/></em></h1><div className="aura-hero-bottom"><p>Strategy, design, and development for businesses ready to make their next move count.</p><Link className="aura-primary-link" to="/contact">Start a project <ArrowUpRight size={18} /></Link></div></div>
      <div className="aura-marquee"><div>Strategy <b>✦</b> Design <b>✦</b> Development <b>✦</b> Digital growth <b>✦</b> Strategy <b>✦</b> Design <b>✦</b> Development <b>✦</b> Digital growth <b>✦</b></div></div>
    </section>
    <section className="aura-intro aura-shell"><p className="aura-section-label">What we do <span>01</span></p><div className="aura-intro-copy"><h2>Digital should feel<br />as human as your <em>ambition.</em></h2><p>At AuraDev, we combine thoughtful creative direction with reliable technology. The result is work that looks sharp, works hard, and gives your team room to grow.</p></div></section>
    <section className="aura-services aura-shell">{services.map(({ number, icon: Icon, title, text }) => <article className="aura-service" key={number}><div className="aura-service-top"><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{text}</p><Link to="/services" aria-label={`Learn about ${title}`}><ArrowUpRight size={20} /></Link></article>)}</section>
    <section className="aura-featured-work aura-shell" aria-label="Featured client work"><div className="aura-featured-work-copy"><p className="aura-section-label">Featured work <span>SCULPT Doha</span></p><div><p className="aura-featured-work-kicker">Fitness studio mobile app</p><h2>Memberships, bookings,<br />and <em>momentum.</em></h2><p className="aura-featured-work-description">A React Native member app that brings daily classes, packages, payments, and studio updates into one calm experience.</p><Link to="/work" className="aura-text-link">Explore the case study <ArrowUpRight size={17} /></Link></div></div><div className="aura-featured-work-device" data-scroll-depth="20" aria-hidden="true"><span>SCULPT</span><div><small>Today</small><strong>Reformer Pilates</strong><p>18:30 · 12 spots left</p><b>Book class</b></div></div></section>
    <section className="aura-proof"><div className="aura-shell aura-proof-grid"><div><p className="aura-section-label">The AuraDev difference <span>02</span></p><h2>Clarity in the <em>complex.</em></h2></div><div className="aura-proof-copy"><p>We leave the buzzwords behind. You get a senior-minded team, a transparent process, and work that is crafted around the way your business actually operates.</p><Link to="/about" className="aura-text-link">Meet AuraDev <ArrowUpRight size={17} /></Link></div></div><div className="aura-shell aura-stats"><div><strong>Built for</strong><span>real people</span></div><div><strong>One team</strong><span>from first idea to launch</span></div><div><strong>Always on</strong><span>clarity &amp; collaboration</span></div></div></section>
    <section className="aura-process aura-shell"><p className="aura-section-label">How we work <span>03</span></p><h2>A good process leaves<br />room for <em>great thinking.</em></h2><div className="aura-process-list">{process.map(([number, title, text]) => <div className="aura-process-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="aura-contact-band"><div className="aura-shell"><Rocket size={27} /><p className="aura-section-label">Your next chapter</p><h2>Have a good idea?<br /><em>Let’s give it an aura.</em></h2><Link className="aura-primary-link aura-primary-link-light" to="/contact">Tell us about it <ArrowUpRight size={18} /></Link></div></section>
  </main>;
}
