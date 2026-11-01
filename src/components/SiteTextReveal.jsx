import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SiteTextReveal.css';

const excludedSelector = [
  '.aura-hero-inner',
  '.studio-hero',
  '.work-gallery-hero',
  'form',
  '[role="dialog"]',
  '.case-study-lightbox',
].join(', ');

function prepareText(target) {
  if (target.dataset.siteRevealReady || target.closest(excludedSelector)) return;
  const text = target.textContent?.trim();
  if (!text) return;

  target.dataset.siteRevealReady = 'true';
  target.setAttribute('aria-label', text);

  const textNodes = [];
  const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
  });
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  let wordIndex = 0;
  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach((token) => {
      if (!token) return;
      if (/^\s+$/.test(token)) {
        fragment.appendChild(document.createTextNode(token));
        return;
      }
      const mask = document.createElement('span');
      mask.className = 'site-word-mask';
      const word = document.createElement('span');
      word.className = 'site-word';
      word.style.setProperty('--word-index', wordIndex);
      word.setAttribute('aria-hidden', 'true');
      word.textContent = token;
      mask.appendChild(word);
      fragment.appendChild(mask);
      wordIndex += 1;
    });
    node.replaceWith(fragment);
  });
  target.classList.add('site-word-target');
}

export default function SiteTextReveal() {
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('site-word-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    const frame = window.requestAnimationFrame(() => {
      document.querySelectorAll('main h2, main h3, main h4, main h5, main h6, main p, main li, footer h2, footer h3, footer p, footer li').forEach((target) => {
        prepareText(target);
        if (target.classList.contains('site-word-target')) observer.observe(target);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}
