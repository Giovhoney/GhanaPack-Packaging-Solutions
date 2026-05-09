import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
}

const SITE_URL = 'https://ghanapack.com';
const DEFAULT_IMAGE = '/images/IMG_0502.jpeg';

const absoluteUrl = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

const SEO = ({ title, description, canonical, ogType = 'website', ogImage = DEFAULT_IMAGE, ogImageAlt }: SEOProps) => {
  const siteName = 'GhanaPack Packaging Solutions';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const pageUrl = canonical ? absoluteUrl(canonical) : SITE_URL;
  const imageUrl = absoluteUrl(ogImage);
  const imageAlt = ogImageAlt || 'GhanaPack Packaging Solutions packaging products and custom paper bags in Ghana';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization'],
    '@id': `${SITE_URL}/#business`,
    name: siteName,
    legalName: siteName,
    alternateName: 'GhanaPack',
    url: SITE_URL,
    image: imageUrl,
    thumbnailUrl: imageUrl,
    logo: absoluteUrl('/images/logo1-transparent-cropped.png'),
    description,
    telephone: '+233540645292',
    email: 'info@ghanapack.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kumasi',
      addressRegion: 'Ashanti Region',
      addressCountry: 'GH'
    },
    areaServed: [
      { '@type': 'City', name: 'Kumasi' },
      { '@type': 'Country', name: 'Ghana' }
    ],
    sameAs: [
      'https://ghanapack.com/'
    ]
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_GH" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:logo" content={absoluteUrl('/images/logo1-transparent-cropped.png')} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Search Console & Indexing */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
