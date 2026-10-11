import { Heart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './StudioPages.css';
import LetterReveal from '../components/LetterReveal';

const values = [
  ['Care in the craft', 'The small decisions are where a memorable experience is made.', Heart],
  ['Clarity always', 'Straight answers, shared context, and no surprises along the way.', Shield],
  ['Better together', 'The best outcomes happen when we work closely with your team.', Users],
];

export default function About() {
  return <main className="studio-page">
    <section className="studio-hero studio-grid about-hero">
      <div className="studio-shell">
        <p className="studio-kicker"><LetterReveal text="The studio behind the screen" delay={0}/></p>
        <h1><LetterReveal text="Human ideas." delay={380}/><br/><em><LetterReveal text="Useful technology." delay={920}/></em></h1>
        <p className="about-hero-copy"><LetterReveal text="We are an independent digital partner for ambitious businesses who want more clarity, more character, and more momentum online." delay={1520}/></p>
      </div>
    </section>
    <section className="studio-section studio-shell"><p className="studio-rule">What drives us <span>01</span></p><div className="studio-lead"><h2>Less noise.<br/>More <em>meaning.</em></h2><p>Our work starts with curiosity. We get close to the problem, make the complex feel clear, and create digital products people want to use.</p></div><div className="studio-cards">{values.map(([title, text, Icon]) => <article className="studio-card" key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="studio-split"><div className="studio-shell"><p className="studio-rule">Our promise <span>02</span></p><div className="studio-split-grid"><h2>Good partners<br/>make work <em>lighter.</em></h2><div><p>We bring focus to the noisy parts of digital transformation and make space for your team to do their best work.</p><ul className="studio-list"><li>Senior thinking from day one</li><li>Clear, collaborative milestones</li><li>Built to last beyond launch</li></ul></div></div></div></section>
    <section className="studio-section studio-shell"><p className="studio-rule">Let’s work together <span>03</span></p><div className="studio-lead"><h2>Bring us your<br/><em>next challenge.</em></h2><Link to="/contact" className="studio-button">Start a conversation</Link></div></section>
  </main>;
}
