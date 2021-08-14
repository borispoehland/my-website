import Portfolio from '../src/components/Portfolio/Portfolio';
import getPortfolio from '../src/staticdata/portfolio';
import path from 'path';
import puppeteer from 'puppeteer';
import mkdirp from 'mkdirp';
import {
  getPortfolioImageHeight,
  getPortfolioImageWidth,
} from '../src/utils/env';
import GenericIntro from '../src/components/GenericIntro/GenericIntro';

export default function PortfolioPage() {
  return (
    <>
      <GenericIntro
        catchPhrase="What I bring to the table"
        heading="Portfolio"
      />
      <Portfolio />
    </>
  );
}

export async function getStaticProps() {
  const portfolioItems = getPortfolio();

  const getFullpathFromFilename = (imgFolder: string) => {
    return path.resolve(
      process.cwd(),
      `public/img/portfolio-page/${imgFolder}/`
    );
  };

  const captureScreenshotsOfPortfolioPages = async () => {
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
        const dir = getFullpathFromFilename(imgFolder);
        await mkdirp(dir);
        const file = path.resolve(dir, `${imgFilename ?? 'main'}.png`);
        await page.goto(href, { waitUntil: 'networkidle2' });
        await page.screenshot({ path: file });
      }
    }
    await browser.close();
  };
  await captureScreenshotsOfPortfolioPages();

  return {
    props: {}, // will be passed to the page component as props
  };
}
