import { DefaultSeoProps } from 'next-seo';

export const defaultDescription =
  'Meet Boris Pöhland, Web Developer and Usability Consultant from Würzburg, Germany';

const getDefaultSEO = (): DefaultSeoProps => {
  return {
    titleTemplate: '%s | Boris Pöhland',
    openGraph: {
      type: 'website',
      locale: 'en',
      url: 'https://www.borispoehland.com',
      site_name: 'Boris Pöhland',
      title: 'Boris Pöhland | Web Developer and Usability Consultant',
      images: [
        {
          url: 'https://boris-webseite.vercel.app/img/seo/opengraph.png',
          width: 1200,
          height: 630,
          alt: "Banner of Boris Pöhland's website",
        },
      ],
      description: defaultDescription,
    },
    twitter: {
      cardType: 'summary_large_image',
      site: '@borispoehland',
      handle: '@borispoehland',
    },
    additionalMetaTags: [
      {
        name: 'application-name',
        content: 'Boris Pöhland',
      },
      {
        name: 'author',
        content: 'Boris Pöhland',
      },
      {
        name: 'copyright',
        content: 'Boris Pöhland',
      },
      {
        name: 'robots',
        content: 'index',
      },
      {
        name: 'robots',
        content: 'follow',
      },
      {
        name: 'msapplication-TileColor',
        content: '#c60ac4',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        name: 'keywords',
        content:
          'developer, programming, react, next, react.js, next.js, frontend, javascript, html, css, wertheim, würzburg, consulting, typescript, prototyping, usability, ux, ui, design, development, software, website, seo, sass, scss, portfolio, design, designer, intellij, germany, entwickler, programmierer, software-developer, software-entwickler, inventor, IT, computer science, creator, freelancer, freelancing',
      },
    ],
    additionalLinkTags: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#c60ac4',
      },
      {
        rel: 'preload',
        // @ts-ignore
        as: 'font',
        href: '/webfonts/NunitoSans-Regular.ttf',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'preload',
        // @ts-ignore
        as: 'font',
        href: '/webfonts/NunitoSans-Bold.ttf',
        crossOrigin: 'anonymous',
      },
    ],
  };
};

export default getDefaultSEO;
