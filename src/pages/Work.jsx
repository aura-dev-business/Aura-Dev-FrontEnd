import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WorkIndex.css'; import './StayZyCard.css'; import './PearlCard.css'; import './ProjectCardLayout.css'; import './WorkResponsiveFix.css'; import './WorkHeaderAlignment.css'; import './StayZyTagline.css'; import './WorkOglas.css';
import './SculptImage.css'; import './MercantileCard.css'; import './WorkCardMeta.css'; import './WorkLight.css'; import './WorkMotion.css'; import './WorkCardImages.css'; import './WorkPlainCards.css'; import './WorkMobileHero.css';

const filters = ['All', 'Mobile app', 'Web platform', 'E-commerce', 'Retail operations'];

const projects = [
  { year: '2025', label: 'SCULPT PILATES CLUB', type: 'Mobile app', description: 'A studio booking and membership app for iOS and Android.', tags: ['Mobile app', 'React Native', 'iOS + Android'], to: '/work/sculpt-pilates-club', art: <div className="project-colour project-colour-sculpt"><span>SCULPT</span><small>Pilates Club</small></div> },
  { year: '2025', label: 'STAYZY', type: 'Web platform', description: 'A rental marketplace and property-management platform.', tags: ['Web platform', 'Next.js', 'Spring Boot'], to: '/work/stayzy', art: <div className="project-colour project-colour-stayzy"><span>StayZy</span><small>Stay easy.</small></div> },
  { year: '2026', label: 'PEARL & OUD', type: 'E-commerce', description: 'Luxury fragrance commerce built for the Qatar market.', tags: ['E-commerce', 'React', 'Laravel'], to: '/work/pearl-and-oud', art: <div className="project-colour project-colour-pearl"><span>Pearl<br/>&amp; Oud</span><small>Curated in Doha</small></div> },
  { year: '2026', label: 'MERCANTILE', type: 'Retail operations', description: 'A focused retail operations workspace for modern stores.', tags: ['Retail tech', 'POS', 'Inventory'], to: '/work/mercantile', art: <div className="project-colour project-colour-mercantile"><span>Mercantile</span><small>Retail, organised.</small></div> }
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.type === activeFilter);
  useEffect(() => { document.body.classList.add('work-reference-mode'); return () => document.body.classList.remove('work-reference-mode'); }, []);
  return <main className="work-index work-gallery-index" id="main-content" tabIndex="-1">
    <section className="work-gallery-hero"><div className="studio-shell"><h1>OUR WORK</h1><p className="work-gallery-intro">We partner with ambitious businesses to shape ideas and bring them to life. Here’s a selection of our favourite work.</p><div className="work-gallery-filters" aria-label="Filter projects">{filters.map((filter) => <button type="button" key={filter} className={filter === activeFilter ? 'is-active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div></section>
    <section className="work-gallery-list studio-shell" aria-live="polite"><p className="work-gallery-rule">Featured work</p><div className="work-gallery-grid">{visibleProjects.map((project) => <Link className="work-gallery-card" to={project.to} key={project.label}><div className="work-gallery-art" data-scroll-depth="-12">{project.art}</div><div className="work-gallery-copy"><h2><span>{project.year} ·</span> {project.label}</h2><p>{project.description}</p><ul aria-label={`${project.label} capabilities`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></Link>)}</div></section>
  </main>;
}
