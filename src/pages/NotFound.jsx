import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main id="main-content" tabIndex="-1" className="studio-page">
      <section className="studio-hero studio-grid">
        <div className="studio-shell">
          <p className="studio-kicker">404 · Page not found</p>
          <h1>This page has<br /><em>moved on.</em></h1>
          <p>The address may be incorrect or the page may no longer be available.</p>
          <Link className="studio-button" to="/">Return home</Link>
        </div>
      </section>
    </main>
  );
}

