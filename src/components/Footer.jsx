import React from 'react';
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';
export default function Footer(){return <footer className="aura-footer"><div className="footer-shell"><div className="aura-footer-top"><div><p className="aura-footer-kicker">AuraDev</p><h2>Built with<br/><em>intention.</em></h2></div><a href="mailto:auradevbusiness@gmail.com" className="aura-footer-email">auradevbusiness@gmail.com <ArrowUpRight size={18}/></a></div><div className="aura-footer-bottom"><p>© {new Date().getFullYear()} AuraDev. Bangalore, India.</p><nav><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link><a href="https://www.instagram.com/auradevco/" aria-label="Instagram"><Instagram size={16}/></a><a href="https://www.linkedin.com/company/auradev" aria-label="LinkedIn"><Linkedin size={16}/></a></nav></div></div></footer>}
