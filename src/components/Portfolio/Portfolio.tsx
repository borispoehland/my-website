import getPortfolio from '../../staticdata/portfolio';
import ToPortfolioItemConverter from './converters/ToPortfolioItemConverter';
import Button from '../Button/Button';
import Anchor from '../Anchor/Anchor';
import { openResourceInNewTab } from '../../utils/dom';

const portfolioItems = getPortfolio();
const amountOfPortfolioItems = portfolioItems.length - 1; // the advertisment doesn't count

const Portfolio = (): JSX.Element => {
  return (
    <div className="generic-layout">
      <section className="generic-layout__section">
        <h1>Projects</h1>
        <p>
          Apart from this website I coded <b>{amountOfPortfolioItems}</b> other
          project{amountOfPortfolioItems > 1 && 's'}. Check
          {amountOfPortfolioItems > 1 ? ' them' : ' it'} out below!
        </p>
        <div className="portfolio">
          {portfolioItems.map(ToPortfolioItemConverter)}
        </div>
        <hr />
      </section>
      <section className="generic-layout__section">
        <Anchor id="cv" />
        <h1>Other work</h1>
        <p>
          My projects don&#39;t cover everything, because I also gained valuable
          experience as an employee. Download my CV for the bigger picture!
        </p>
        <Button onClick={() => openResourceInNewTab('/files/cv.pdf')}>
          Download CV
        </Button>
        <hr />
      </section>
      <div style={{ height: '100vh' }} />
    </div>
  );
};

export default Portfolio;
