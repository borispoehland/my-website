import getPortfolio from '../../staticdata/portfolio';
import ToPortfolioItemConverter from './converters/ToPortfolioItemConverter';
import Button from '../Button/Button';
import Anchor from '../Anchor/Anchor';

const portfolioItems = getPortfolio();
const amountOfPortfolioItems = portfolioItems.length - 1; // the advertisment doesn't count

const Portfolio = (): JSX.Element => {
  return (
    <div className="portfolio">
      <section className="portfolio__section">
        <h1>Projects</h1>
        <p>
          Apart from this website I coded <b>{amountOfPortfolioItems}</b> other
          project{amountOfPortfolioItems > 1 && 's'} besides my studies. Check
          {amountOfPortfolioItems > 1 ? ' them' : ' it'} out below:
        </p>
        {portfolioItems.map(ToPortfolioItemConverter)}
        <hr />
      </section>
      <section className="portfolio__section">
        <Anchor id="cv" />
        <h1>Other work</h1>
        <p>
          My projects don&#39;t cover everything, because I was also able to
          gain experience as an employee. Download my CV for the bigger picture:
        </p>
        <Button onClick={() => {}}>Download CV</Button>
      </section>
    </div>
  );
};

export default Portfolio;
