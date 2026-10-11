import './LetterReveal.css';

export default function LetterReveal({ text, delay = 0, className = '' }) {
  return <span className={`letter-reveal ${className}`} aria-label={text} style={{ '--reveal-start': `${delay}ms` }}>{[...text].map((letter, index) => <span aria-hidden="true" key={`${letter}-${index}`} style={{ '--letter-index': index }}>{letter === ' ' ? '\u00a0' : letter}</span>)}</span>;
}
