import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* TODO: next-seo, favicons */}
          <script defer src="/scripts/jquery-3.6.0.js" />
          <script defer src="/scripts/jQuery.inViewport.js" />
          <link
            rel="preload"
            href="/webfonts/NunitoSans-Regular.ttf"
            as="font"
          />
          <meta
            name="description"
            content="Boris Pöhland is a freelance developer and Usability analyst from Germany. Hire him here!"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
