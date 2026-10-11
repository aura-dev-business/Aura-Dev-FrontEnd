export default function AuraMark({ className = 'h-10 w-10' }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M7.5 38.5 23.5 8.5l16.8 30" stroke="#171717" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.3 28.4h18.2" stroke="#171717" strokeWidth="4.2" strokeLinecap="round" />
    <path d="M29.2 8.8c5.2 2.1 9.1 6.9 9.1 12.7" stroke="#B275E9" strokeWidth="3.2" strokeLinecap="round" />
    <circle cx="39.2" cy="23.5" r="2.8" fill="#B275E9" />
  </svg>;
}
