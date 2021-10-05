import Portfolio from '../src/components/Portfolio/Portfolio';
import getPortfolio from '../src/staticdata/portfolio';
import path from 'path';
import puppeteer from 'puppeteer';
import mkdirp from 'mkdirp';
import { getPortfolioImageHeight, getPortfolioImageWidth } from '@utils/env';
import GenericIntro from '../src/components/GenericIntro/GenericIntro';
import { NextSeo } from 'next-seo';
import { useUrlBreadcrumbs } from '@components/Breadcrumbs/hooks';
import * as fs from 'fs';

export default function PortfolioPage() {
  useUrlBreadcrumbs();

  return (
    <>
      <NextSeo
        title="Portfolio"
        description="Boris Pöhland is Web Developer and Usability Consultant from Würzburg, Germany. See the IT projects he has been working on!"
      />
      <GenericIntro
        catchPhrase="What I bring to the table"
        heading="Portfolio"
      />
      <Portfolio />
    </>
  );
}

export async function getStaticProps() {
  const portfolioItems = getPortfolio(undefined);

  const captureScreenshotsOfPortfolioPages = async () => {
    const getPortfolioImgFolder = (imgFolder: string) => {
      return path.resolve(
        process.cwd(),
        `public/img/portfolio-page/${imgFolder}/`
      );
    };

    const browser = await puppeteer.launch({
      defaultViewport: {
        width: getPortfolioImageWidth(),
        height: getPortfolioImageHeight(),
      },
      args: ['--no-sandbox'],
    });

    const page = await browser.newPage();

    for (const { href, imgFolder, imgFilename } of portfolioItems) {
      if (href) {
        const dir = getPortfolioImgFolder(imgFolder);
        await mkdirp(dir);
        const file = path.resolve(dir, `${imgFilename ?? 'main'}.png`);
        if (!fs.existsSync(file)) {
          await page.goto(href, { waitUntil: 'networkidle2' });
          await page.screenshot({ path: file });
        }
      }
    }

    await browser.close();
  };

  await captureScreenshotsOfPortfolioPages();

  return {
    props: {}, // will be passed to the page component as props
  };
}
