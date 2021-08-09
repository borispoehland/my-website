import Portfolio from '../src/components/Portfolio/Portfolio';
import getPortfolio from '../src/staticdata/portfolio';
import path from 'path';
import puppeteer from 'puppeteer';
import mkdirp from 'mkdirp';
import {
  getPortfolioImageHeight,
  getPortfolioImageWidth,
} from '../src/utils/env';

interface IProps {}

const PortfolioPage = (): JSX.Element => {
  return <Portfolio />;
};

export async function getStaticProps() {
  const portfolioItems = getPortfolio();

  const getFullpathFromFilename = (imgFolder: string) => {
    return path.resolve(
      process.cwd(),
      `public/img/portfolio-page/${imgFolder}/`
    );
  };

  const capture = async () => {
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
  await capture();

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default PortfolioPage;
