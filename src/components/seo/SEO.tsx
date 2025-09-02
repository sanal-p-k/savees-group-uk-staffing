import { Helmet } from 'react-helmet-async';
import { siteConfig, getMetaTags } from '@/lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  url,
  image,
  keywords,
  noIndex = false,
}) => {
  const metaTags = getMetaTags({
    title: title ? `${title} | ${siteConfig.title}` : siteConfig.title,
    description: description || siteConfig.description,
    url: url || siteConfig.url,
    image: image || siteConfig.defaultImage,
    keywords: keywords ? keywords.join(', ') : undefined,
  });

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteConfig.title}` : siteConfig.title}</title>
      
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      <link rel="canonical" href={url || siteConfig.url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* PWA */}
      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Social Media */}
      <meta property="og:site_name" content={siteConfig.title} />
      <meta property="og:locale" content={siteConfig.locale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
    </Helmet>
  );
};

export default SEO;
