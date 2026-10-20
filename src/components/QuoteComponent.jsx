import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import './QuoteComponent.css';

const emptyForm = { name: '', email: '', message: '' };

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const apiBase = import.meta.env.VITE_API_BASE_URL;
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen, onClose]);

  const close = () => {
    setStatus('idle');
    setNotice('');
    setSubmitted(false);
    onClose();
  };

  const submit = async (event) => {
    event.preventDefault();
    setNotice('');
    setSubmitted(false);
    if (!apiBase) {
      setStatus('error');
      setNotice('Contact delivery is not configured. Please email auradevbusiness@gmail.com directly.');
      return;
    }
    setStatus('submitting');
    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: 'Quote request', service: 'Quote request' }),
      });
      if (!response.ok) throw new Error('Request failed');
      setForm(emptyForm);
      setStatus('success');
      setSubmitted(true);
    } catch {
      setStatus('error');
      setNotice('We could not send your request. Please try again or email us directly.');
    }
  };

  return createPortal(<AnimatePresence>
    {isOpen && <motion.div
      className="quote-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
      onMouseDown={(event) => event.target === event.currentTarget && close()}
    >
      <motion.section
        className="quote-modal quote-modal-panel studio-grid relative w-full max-w-xl overflow-y-auto border border-black/15 bg-[#f8f8f6] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        aria-describedby="quote-description"
        initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.975 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.985 }}
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
      <button type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); close(); }} className="quote-modal-close absolute right-3 top-3 z-10 rounded-full p-2 text-black transition-colors hover:bg-black/5" aria-label="Close quote form"><X size={20}/></button>
      <div className="quote-modal-intro">
        <p className="quote-modal-eyebrow">AuraDev / Project enquiry</p>
        <h2 id="quote-title">Let’s talk <em>ideas.</em></h2>
        <p id="quote-description" className="quote-modal-description">Tell us about your project and we’ll get back to you within 24 hours.</p>
      </div>
      {submitted ? (
        <div className="quote-modal-success bg-[#f8f8f6] px-7 py-12 text-center">
          <CheckCircle2 className="mx-auto mb-5 text-[#16803c]" size={48} strokeWidth={1.5}/>
          <h3 className="text-2xl font-semibold tracking-tight text-black">Request sent.</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-600">Thank you for reaching out. Our team will contact you within 24 hours.</p>
          <button type="button" onClick={close} className="mt-7 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#9b5bd6]">Close</button>
        </div>
      ) : (
        <form onSubmit={submit} className="quote-modal-form" aria-busy={status === 'submitting'}>
          <div className="quote-modal-field">
            <label htmlFor="quote-name">Full name</label>
            <input id="quote-name" name="name" autoComplete="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your full name"/>
          </div>
          <div className="quote-modal-field">
            <label htmlFor="quote-email">Email address</label>
            <input id="quote-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@company.com"/>
          </div>
          <div className="quote-modal-field">
            <label htmlFor="quote-message">Project details</label>
            <textarea id="quote-message" name="message" required rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What would you like to create?"/>
          </div>
          {notice && <p role="status" className={status === 'error' ? 'text-sm text-red-700' : 'text-sm text-green-700'}>{notice}</p>}
          <button type="submit" disabled={status === 'submitting'} className="quote-modal-submit rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#9b5bd6] disabled:cursor-not-allowed disabled:opacity-60">{status === 'submitting' ? 'Sending…' : 'Send request'}</button>
        </form>
      )}
      </motion.section>
    </motion.div>}
  </AnimatePresence>, document.body);
}
