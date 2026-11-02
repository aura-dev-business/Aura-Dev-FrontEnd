import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import './StudioPages.css';
import './ContactSuccess.css';

const initialForm = { name: '', email: '', service: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const reduceMotion = useReducedMotion();

  const submit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/auradevbusiness@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _subject: `New AuraDev website enquiry — ${form.service || 'General'}`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
        }),
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

  return <main className="studio-page">
    <section className="studio-hero studio-grid"><div className="studio-shell"><p className="studio-kicker">A good place to start</p><h1>Let’s make<br/><em>something useful.</em></h1><p>Tell us where you are, where you want to go, and the work you need help with. We’ll take it from there.</p></div></section>
    <section className="studio-shell studio-contact">
      <div className="studio-contact-info">
        <p className="studio-rule">Contact AuraDev <span>01</span></p>
        <h2>Start the<br/><em>conversation.</em></h2>
        <div className="contact-details">
          <div className="contact-detail"><Mail size={18}/><div><span>Email</span><a href="mailto:auradevbusiness@gmail.com">auradevbusiness@gmail.com</a></div></div>
          <div className="contact-detail"><Phone size={18}/><div><span>Phone</span><a href="tel:+919188296027">+91 9188296027</a></div></div>
          <div className="contact-detail"><MapPin size={18}/><div><span>Location</span><p>Bangalore, Karnataka, India</p></div></div>
        </div>
      </div>
      {status === 'success' ? <motion.div className="studio-form studio-form-success" role="status" initial={reduceMotion ? false : { opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .42, ease: [0.16, 1, 0.3, 1] }}>
        <CheckCircle2 className="text-[#16803c]" size={48} strokeWidth={1.5}/><h3>Message sent.</h3><p>Thank you for reaching out. Our team will contact you within 24 hours.</p><button type="button" className="studio-button" onClick={() => { setStatus('idle'); setMessage(''); }}>Send another message</button>
      </motion.div> : <form className="studio-form" onSubmit={submit} aria-busy={status === 'submitting'}>
        <label htmlFor="name">Your name</label><input id="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your full name"/>
        <label htmlFor="email">Email address</label><input id="email" type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@company.com"/>
        <label htmlFor="service">What can we help with?</label><select id="service" value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}><option value="">Choose a service</option><option>Brand strategy &amp; identity</option><option>Website development</option><option>E-commerce development</option><option>Mobile app development</option><option>SaaS development</option><option>UI/UX &amp; product design</option><option>API &amp; system integrations</option><option>Digital marketing &amp; growth</option><option>Hosting, maintenance &amp; IT support</option><option>Something else</option></select>
        <label htmlFor="message">A little about the project</label><textarea id="message" rows="5" required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What are you looking to create?"/>
        {message && <p role="status" className="text-red-700 mb-5">{message}</p>}
        <button className="studio-button" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : <>Send message <ArrowUpRight size={17}/></>}</button>
      </form>}
    </section>
  </main>;
}
