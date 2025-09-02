export const siteConfig = {
  title: "Savees Group | Premier UK Staffing & Recruitment Agency",
  description: "Savees Group is a leading UK staffing agency specializing in hospitality, logistics, and event staffing solutions. Fast, reliable, and professional staffing services across the UK.",
  url: "https://www.saveesgroup.com",
  defaultImage: "/images/og-image.jpg",
  keywords: [
    // Primary Keywords
    "staffing agency UK",
    "hospitality staffing UK",
    "event staff agency UK",
    "warehouse staffing UK",
    "logistics staffing UK",
    "temporary staffing UK",
    "hire waiters UK",
    "emergency staffing solutions",
    
    // Location-Specific
    "hospitality recruitment London",
    "warehouse staff Manchester",
    "logistics staff Birmingham",
    "event staff agency London",
    
    // Service-Specific
    "temporary hospitality staff",
    "last-minute staff hire UK",
    "catering staff recruitment",
    "front-of-house staff",
    "hotel staff recruitment",
    "luxury hospitality staffing"
  ],
  author: "Savees Group Ltd",
  locale: "en_GB",
  twitterHandle: "@saveesgroup",
  socialLinks: {
    facebook: "https://www.facebook.com/saveesgroup/",
    instagram: "https://www.instagram.com/savees_group_ltd",
    linkedin: "https://www.linkedin.com/company/savees-group-ltd/"
  }
};

export const getMetaTags = ({
  title = siteConfig.title,
  description = siteConfig.description,
  url = siteConfig.url,
  image = siteConfig.defaultImage,
  keywords = siteConfig.keywords.slice(0, 15).join(', ')
} = {}) => {
  return [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'author', content: siteConfig.author },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: url },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:creator', content: siteConfig.twitterHandle }
  ];
};
