import getPortfolio from '../../staticdata/portfolio';
import ToPortfolioItemConverter from './converters/ToPortfolioItemConverter';

interface IProps {}

const Portfolio = (): JSX.Element => {
  return (
    <div className="portfolio">
      {getPortfolio().map(ToPortfolioItemConverter)}
    </div>
  );
};

export default Portfolio;
