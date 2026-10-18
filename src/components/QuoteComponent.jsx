import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
      onMouseDown={(event) => event.target === event.currentTarget && close()}
    >
      <motion.section
        className="quote-modal studio-grid relative max-h-[92vh] w-full max-w-xl overflow-y-auto border border-black/15 bg-[#f8f8f6] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.975 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.985 }}
        transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
      <button type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); close(); }} className="absolute right-4 top-4 z-10 rounded-full p-2 text-black transition-colors hover:bg-black/5" aria-label="Close quote form"><X size={20}/></button>
      <header className="border-b border-black/15 px-7 py-9"><p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-gray-500">AuraDev / Project enquiry</p><h2 id="quote-title" className="text-4xl font-semibold tracking-tight text-black">Let’s talk <em className="font-serif font-normal">ideas.</em></h2><p className="mt-3 text-sm text-gray-600">Tell us about your project and we’ll get back to you within 24 hours.</p></header>
      {submitted ? <div className="bg-[#f8f8f6] px-7 py-12 text-center"><CheckCircle2 className="mx-auto mb-5 text-[#16803c]" size={48} strokeWidth={1.5}/><h3 className="text-2xl font-semibold tracking-tight text-black">Request sent.</h3><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-600">Thank you for reaching out. Our team will contact you within 24 hours.</p><button type="button" onClick={close} className="mt-7 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#9b5bd6]">Close</button></div> : <form onSubmit={submit} className="space-y-5 bg-[#f8f8f6] p-7"><div><label htmlFor="quote-name" className="mb-1 block text-sm font-medium text-gray-700">Full name</label><input id="quote-name" name="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full border-0 border-b border-gray-400 bg-transparent px-0 py-3 outline-none focus:border-black" placeholder="Your full name"/></div><div><label htmlFor="quote-email" className="mb-1 block text-sm font-medium text-gray-700">Email address</label><input id="quote-email" name="email" type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full border-0 border-b border-gray-400 bg-transparent px-0 py-3 outline-none focus:border-black" placeholder="you@company.com"/></div><div><label htmlFor="quote-message" className="mb-1 block text-sm font-medium text-gray-700">Project details</label><textarea id="quote-message" name="message" required rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full resize-y border-0 border-b border-gray-400 bg-transparent px-0 py-3 outline-none focus:border-black" placeholder="What would you like to create?"/></div>{notice && <p role="status" className={status === 'error' ? 'text-sm text-red-700' : 'text-sm text-green-700'}>{notice}</p>}<button type="submit" disabled={status === 'submitting'} className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#9b5bd6] disabled:cursor-not-allowed disabled:opacity-60">{status === 'submitting' ? 'Sending…' : 'Send request'}</button></form>}
      </motion.section>
    </motion.div>}
  </AnimatePresence>, document.body);
}
