import getPortfolio from '../../staticdata/portfolio';
import ToPortfolioItemConverter from './converters/ToPortfolioItemConverter';
import Emoji from '../Emoji/Emoji';

const portfolioItems = getPortfolio();
const amountOfPortfolioItems = portfolioItems.length;

const Portfolio = (): JSX.Element => {
  return (
    <div className="portfolio">
      <h1>Websites I&#39;ve coded</h1>
      <p>
        Apart from this website I coded <b>{amountOfPortfolioItems}</b> other
        website{amountOfPortfolioItems > 1 && 's'} besides my studies. Check
        them out below <Emoji symbol="👇🏼" />
      </p>
      {portfolioItems.map(ToPortfolioItemConverter)}
    </div>
  );
};

export default Portfolio;
