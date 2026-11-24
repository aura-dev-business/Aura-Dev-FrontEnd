import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BRAND, DEFAULT_DESCRIPTION, routeMetadata, SITE_URL } from '../seoConfig';

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function serviceMetadata(pathname) {
  const slug = pathname.split('/').filter(Boolean)[1] || 'digital';
  const serviceName = slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
  return {
    title: `${serviceName} Services | AuraDev`,
    description: `Learn how AuraDev delivers ${serviceName.toLowerCase()} services through practical strategy, thoughtful design, and reliable development.`,
    type: 'website',
    serviceName,
  };
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    const isServiceDetail = /^\/services\/[^/]+$/.test(normalizedPath);
    const isKnownRoute = Boolean(routeMetadata[normalizedPath]) || isServiceDetail;
    const metadata = routeMetadata[normalizedPath] || (isServiceDetail ? serviceMetadata(normalizedPath) : {
      title: 'Page Not Found | AuraDev',
      description: DEFAULT_DESCRIPTION,
      type: 'website',
    });
    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;

    document.title = metadata.title;
    document.documentElement.lang = 'en';
    upsertMeta('meta[name="description"]', { name: 'description', content: metadata.description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: isKnownRoute ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' : 'noindex, follow' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: metadata.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: metadata.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: metadata.type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: BRAND });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: metadata.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: metadata.description });
    upsertLink('canonical', canonicalUrl);

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: BRAND,
          url: SITE_URL,
          email: 'auradevbusiness@gmail.com',
          telephone: '+91-9188296027',
          sameAs: [
            'https://www.instagram.com/auradevco/',
            'https://www.linkedin.com/company/auradev',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          name: BRAND,
          url: SITE_URL,
          publisher: { '@id': `${SITE_URL}/#organization` },
        },
        {
          '@type': metadata.type === 'article' ? 'CreativeWork' : 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          name: metadata.title,
          description: metadata.description,
          url: canonicalUrl,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
        },
        ...(metadata.serviceName ? [{
          '@type': 'Service',
          name: metadata.serviceName,
          description: metadata.description,
          provider: { '@id': `${SITE_URL}/#organization` },
          url: canonicalUrl,
        }] : []),
      ],
    };

    let script = document.head.querySelector('script[data-seo-structured-data]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoStructuredData = 'true';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [pathname]);

  return null;
}

