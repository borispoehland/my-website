import getPortfolio from '../../staticdata/portfolio';
import ToPortfolioItemConverter from './converters/ToPortfolioItemConverter';
import Button from '../Button/Button';
import { openResourceInNewTab } from '@utils/dom';
import GenericSection from '../GenericSection/GenericSection';
import { useRouter } from 'next/router';
import { useMemoOne } from 'use-memo-one';

const Portfolio = (): JSX.Element => {
  const router = useRouter();

  const portfolioItems = useMemoOne(() => {
    return getPortfolio(router);
  }, [router]);

  const amountOfPortfolioItems = useMemoOne(() => {
    return portfolioItems.length - 1; // the advertisment doesn't count
  }, [portfolioItems]);

  return (
    <>
      <GenericSection
        heading="Projects"
        id="projects"
        shortIntro={
          <>
            Apart from this website I coded <b>{amountOfPortfolioItems}</b>{' '}
            other project{amountOfPortfolioItems > 1 && 's'}.
          </>
        }
      >
        {portfolioItems.map(ToPortfolioItemConverter)}
      </GenericSection>
      <GenericSection
        id="cv"
        heading="Other work"
        shortIntro="My projects don't cover everything, because I also gained valuable
          experience as an employee. Download my CV for the bigger picture!"
      >
        <Button onClick={() => openResourceInNewTab('/files/cv.pdf')}>
          Download CV
        </Button>
      </GenericSection>
    </>
  );
};

export default Portfolio;
