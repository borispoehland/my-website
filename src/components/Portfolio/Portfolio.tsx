import getPortfolio from '../../staticdata/portfolio';
import ToPortfolioItemConverter from './converters/ToPortfolioItemConverter';
import Emoji from '../Emoji/Emoji';

const portfolioItems = getPortfolio();
const amountOfPortfolioItems = portfolioItems.length;

const Portfolio = (): JSX.Element => {
  return (
    <div className="portfolio">
      <h1>Projects</h1>
      <p>
        Apart from this website I coded <b>{amountOfPortfolioItems}</b> other
        project{amountOfPortfolioItems > 1 && 's'} besides my studies. Check
        them out below <Emoji symbol="👇🏼" />
      </p>
      {portfolioItems.map(ToPortfolioItemConverter)}
      <h1>Test</h1>
      <div style={{ height: '100vh' }} />
    </div>
  );
};

export default Portfolio;
