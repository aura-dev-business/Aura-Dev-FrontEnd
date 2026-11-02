import React from 'react';
import { ArrowUpRight, Code2, CloudCog, Layers3, Megaphone, Palette, PenTool, PlugZap, ShoppingBag, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './StudioPages.css';
const services=[
  ['Brand strategy & identity','Clear positioning, visual identity, and brand systems that give your business a recognisable direction.',PenTool],
  ['Website development','Fast, responsive websites and web applications designed to turn attention into action.',Code2],
  ['E-commerce development','Conversion-focused online stores with catalogue, payments, operations, and a refined customer journey.',ShoppingBag],
  ['Mobile app development','Thoughtful iOS and Android apps that make everyday customer experiences feel effortless.',Smartphone],
  ['SaaS development','Scalable software products, dashboards, and portals built around your real business model.',Layers3],
  ['UI/UX & product design','Clear user journeys and polished interfaces that make complex products easy to use.',Palette],
  ['API & system integrations','Reliable connections between your website, apps, payments, CRM, and internal tools.',PlugZap],
  ['Digital marketing & growth','Practical growth strategy, campaigns, and optimisation that connect your digital presence to business goals.',Megaphone],
  ['Hosting, maintenance & IT support','Practical launch support, ongoing improvements, and dependable technical care after go-live.',CloudCog]
];
export default function Services(){return <main className="studio-page" id="main-content" tabIndex="-1"><section className="studio-hero studio-grid"><div className="studio-shell"><p className="studio-kicker">AuraDev capabilities</p><h1>Made to work.<br/><em>Made to matter.</em></h1><p>We build considered digital products and provide the technical support that keeps them useful long after launch.</p></div></section><section className="studio-section studio-shell"><p className="studio-rule">Our services <span>01</span></p><div className="studio-lead"><h2>One partner for<br/>your digital <em>next.</em></h2><p>Start with one focused need or bring us in from product idea through launch and ongoing support. Every engagement begins with your actual goals.</p></div><div className="studio-cards">{services.map(([title,text,Icon],i)=><article className="studio-card" key={title}><Icon size={24}/><h3>{String(i+1).padStart(2,'0')} — {title}</h3><p>{text}</p></article>)}</div></section><section className="studio-split"><div className="studio-shell"><p className="studio-rule">A connected approach <span>02</span></p><div className="studio-split-grid"><h2>Good work is never<br/><em>one-size-fits-all.</em></h2><div><p>We shape the team and roadmap around the opportunity—giving you the right mix of design, development, and ongoing technical support.</p><Link to="/contact" className="studio-button">Discuss your project <ArrowUpRight size={17}/></Link></div></div></div></section></main>}
