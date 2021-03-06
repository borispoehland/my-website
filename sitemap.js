const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://www.borispoehland.com',
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: `${__dirname}/public`,
  ignoreIndexFiles: true,
  ignoredPaths: ['api', 'privacy', 'imprint', 'blog/[slug]'],
  sitemapStylesheet: [
    {
      type: 'text/xsl',
      styleFile: 'sitemap.xsl',
    },
  ],
});
