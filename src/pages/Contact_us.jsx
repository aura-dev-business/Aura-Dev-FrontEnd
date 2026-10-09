import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import './StudioPages.css';

const initialForm = { name: '', email: '', service: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const apiBase = import.meta.env.VITE_API_BASE_URL;

  const submit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');
    if (!apiBase) {
      setStatus('error');
      setMessage('Contact delivery is not configured yet. Please email us directly at auradevbusiness@gmail.com.');
      return;
    }
    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: `Website enquiry — ${form.service || 'General'}` }),
      });
      if (!response.ok) throw new Error('Request failed');
      setForm(initialForm);
      setStatus('success');
      setMessage('Thanks — your message is on its way. We’ll be in touch soon.');
    } catch {
      setStatus('error');
      setMessage('We could not send your message. Please try again or email us directly.');
    }
  };

  return <main className="studio-page"><section className="studio-hero studio-grid"><div className="studio-shell"><p className="studio-kicker">A good place to start</p><h1>Let’s make<br/><em>something useful.</em></h1><p>Tell us where you are, where you want to go, and the work you need help with. We’ll take it from there.</p></div></section><section className="studio-shell studio-contact"><div className="studio-contact-info"><p className="studio-rule">Contact AuraDev <span>01</span></p><h2>Start the<br/><em>conversation.</em></h2><p><Mail size={16}/> <a href="mailto:auradevbusiness@gmail.com">auradevbusiness@gmail.com</a></p><p><Phone size={16}/> <a href="tel:+919188296027">+91 9188296027</a></p><p><MapPin size={16}/> Bangalore, Karnataka, India</p></div><form className="studio-form" onSubmit={submit}><label htmlFor="name">Your name</label><input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name"/><label htmlFor="email">Email address</label><input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"/><label htmlFor="service">What can we help with?</label><select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}><option value="">Choose a service</option><option>Digital product</option><option>Brand experience</option><option>Business system</option><option>Digital growth</option></select><label htmlFor="message">A little about the project</label><textarea id="message" rows="5" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you looking to create?"/>{message && <p role="status" className={status === 'error' ? 'text-red-700 mb-5' : 'text-green-700 mb-5'}>{message}</p>}<button className="studio-button" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : <>Send message <ArrowUpRight size={17}/></>}</button></form></section></main>;
}
