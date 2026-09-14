import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/dai-flash', '/products', '/amc'],
      disallow: ['/admin'],
    },
    sitemap: 'https://drutasystems.com/sitemap.xml',
  };
}