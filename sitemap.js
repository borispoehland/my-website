const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://borispoehland.com',
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: `${__dirname}/public`,
  ignoreIndexFiles: true,
  ignoredPaths: ['api'],
  sitemapStylesheet: [
    {
      type: 'text/xsl',
      styleFile: 'sitemap.xsl',
    },
  ],
});
