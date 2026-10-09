import React from 'react';
import { ArrowUpRight, Code2, Layers3, Megaphone, Rocket, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home_page.css';

const services = [
  { number: '01', icon: Code2, title: 'Digital products', text: 'Websites and web applications that are fast, useful, and unmistakably yours.' },
  { number: '02', icon: Layers3, title: 'Brand experiences', text: 'Identity, interfaces, and content systems built to make every touchpoint feel intentional.' },
  { number: '03', icon: Workflow, title: 'Business systems', text: 'Custom platforms and automations that turn complicated work into clear momentum.' },
  { number: '04', icon: Megaphone, title: 'Growth support', text: 'A practical digital partner for launches, campaigns, and what comes next.' },
];
const process = [['01', 'Understand', 'We listen closely to the challenge, people, and opportunity behind your brief.'], ['02', 'Shape', 'We turn the right insights into a clear, confident direction.'], ['03', 'Build', 'We design and develop the details that make the whole experience work.'], ['04', 'Evolve', 'We launch, learn, and improve with your business as it grows.']];

export default function Home() {
  return <main className="aura-home">
    <section className="aura-hero"><div className="aura-orb aura-orb-one" /><div className="aura-orb aura-orb-two" /><div className="aura-grid" />
      <div className="aura-shell aura-hero-inner"><p className="aura-eyebrow"><Sparkles size={14} /> Independent digital studio</p><h1>We turn ambitious<br /><em>ideas into impact.</em></h1><div className="aura-hero-bottom"><p>Strategy, design, and development for businesses ready to make their next move count.</p><Link className="aura-primary-link" to="/contact">Start a project <ArrowUpRight size={18} /></Link></div></div>
      <div className="aura-marquee"><div>Strategy <b>✦</b> Design <b>✦</b> Development <b>✦</b> Digital growth <b>✦</b> Strategy <b>✦</b> Design <b>✦</b> Development <b>✦</b> Digital growth <b>✦</b></div></div>
    </section>
    <section className="aura-intro aura-shell"><p className="aura-section-label">What we do <span>01</span></p><div className="aura-intro-copy"><h2>Digital should feel<br />as human as your <em>ambition.</em></h2><p>At AuraDev, we combine thoughtful creative direction with reliable technology. The result is work that looks sharp, works hard, and gives your team room to grow.</p></div></section>
    <section className="aura-services aura-shell">{services.map(({ number, icon: Icon, title, text }) => <article className="aura-service" key={number}><div className="aura-service-top"><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{text}</p><Link to="/services" aria-label={`Learn about ${title}`}><ArrowUpRight size={20} /></Link></article>)}</section>
    <section className="aura-proof"><div className="aura-shell aura-proof-grid"><div><p className="aura-section-label">The AuraDev difference <span>02</span></p><h2>Clarity in the <em>complex.</em></h2></div><div className="aura-proof-copy"><p>We leave the buzzwords behind. You get a senior-minded team, a transparent process, and work that is crafted around the way your business actually operates.</p><Link to="/about" className="aura-text-link">Meet AuraDev <ArrowUpRight size={17} /></Link></div></div><div className="aura-shell aura-stats"><div><strong>Built for</strong><span>real people</span></div><div><strong>One team</strong><span>from first idea to launch</span></div><div><strong>Always on</strong><span>clarity &amp; collaboration</span></div></div></section>
    <section className="aura-process aura-shell"><p className="aura-section-label">How we work <span>03</span></p><h2>A good process leaves<br />room for <em>great thinking.</em></h2><div className="aura-process-list">{process.map(([number, title, text]) => <div className="aura-process-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="aura-contact-band"><div className="aura-shell"><Rocket size={27} /><p className="aura-section-label">Your next chapter</p><h2>Have a good idea?<br /><em>Let’s give it an aura.</em></h2><Link className="aura-primary-link aura-primary-link-light" to="/contact">Tell us about it <ArrowUpRight size={18} /></Link></div></section>
  </main>;
}
