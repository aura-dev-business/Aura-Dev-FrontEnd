import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProjectCaseStudy.css';
import './ProjectCaseStudyOverrides.css';

function ProjectVisual({ project }) {
  const [active, setActive] = useState(null);
  const gallery = project.gallery || [];
  const move = (offset) => setActive((index) => (index + offset + gallery.length) % gallery.length);

  useEffect(() => {
    if (active === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActive(null);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  if (project.liveUrl) return <section className="case-study-live" aria-label={`${project.name} live website`}><header><span>Live website</span><a href={project.liveUrl} target="_blank" rel="noreferrer">Open live website <ArrowUpRight size={16}/></a></header><iframe title={`${project.name} live website`} src={project.liveUrl} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"/></section>;
  if (!gallery.length) return <div className="case-study-art"><span>{project.number}</span><strong>{project.name}</strong><small>{project.type}</small></div>;

  return <><section className="case-study-gallery" aria-label={`${project.name} gallery`}><header><span>Project gallery</span><p>Tap a screen to view it full size.</p></header><div>{gallery.map(([source, label], index) => <button type="button" key={label} onClick={() => setActive(index)}><img src={source} alt={`${project.name} ${label}`}/><span>{String(index + 1).padStart(2, '0')} · {label}</span></button>)}</div></section>{active !== null && createPortal(<div className="case-study-lightbox" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}><section role="dialog" aria-modal="true" aria-label={gallery[active][1]}><button className="case-study-lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Close image viewer"><X size={20}/></button><img src={gallery[active][0]} alt={`${project.name} ${gallery[active][1]}`}/><footer><button type="button" onClick={() => move(-1)}><ChevronLeft size={18}/> Previous</button><span>{active + 1} / {gallery.length}</span><button type="button" onClick={() => move(1)}>Next <ChevronRight size={18}/></button></footer></section></div>, document.body)}</>;
}

export default function ProjectCaseStudy({ project }) {
  return <main className={`case-study case-study--${project.accent}`} id="main-content" tabIndex="-1" data-no-letter-reveal>
    <section className="case-study-hero studio-grid"><div className="studio-shell"><div className="case-study-hero-top"><Link className="case-study-back" to="/work"><ArrowLeft size={16}/> All work</Link><p className="case-study-eyebrow">{project.eyebrow}</p></div><h1>{project.name}</h1><span>Case study / {project.number}</span></div></section>
    <section className="case-study-intro studio-shell"><div><p>{project.type}</p><h2>{project.title}</h2></div><p>{project.platform}</p></section>
    <section className="case-study-showcase studio-shell"><ProjectVisual project={project}/><div className="case-study-summary"><p>{project.summary}</p><div>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></section>
    <section className="case-study-outcomes studio-shell"><p>What we delivered <span>01</span></p><div>{project.outcomes.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="case-study-features studio-shell"><p>Key features <span>02</span></p><div>{project.features.map((feature, index) => <article key={feature}><span>{String(index + 1).padStart(2, '0')}</span><h3>{feature}</h3></article>)}</div></section>
    <section className="case-study-architecture studio-shell"><p>Approach <span>03</span></p><div><h2>{project.architectureTitle}<br/><em>{project.architectureEmphasis}</em></h2><p>{project.architecture}</p></div></section>
    <section className="case-study-stack studio-shell"><p>Technology stack <span>04</span></p><div>{project.stack.map(([area, value]) => <article key={area}><strong>{area}</strong><span>{value}</span></article>)}</div></section>
    <section className="case-study-contribution studio-shell"><p>AuraDev contribution</p><div><h2>{project.contributionTitle}</h2><p>{project.contribution}</p></div></section>
    <section className="case-study-next studio-grid"><div className="studio-shell"><p>Have a project worth showing?</p><h2>Let’s build <em>what’s next.</em></h2><Link to="/contact">Start a project <ArrowUpRight size={18}/></Link></div></section>
  </main>;
}
