import getPortfolio from '@data/portfolio';
import ToPortfolioItemConverter from './converters/ToPortfolioItemConverter';
import Button from '../Button/Button';
import { openResourceInNewTab } from '@utils/dom';
import GenericSection from '../GenericSection/GenericSection';
import { useRouter } from 'next/router';
import { useMemoOne } from 'use-memo-one';
import { BOILERPLATES_PATH, CV_PATH } from '@utils/paths';

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
        shortIntro={
          <>
            Apart from this website I coded <b>{amountOfPortfolioItems}</b>{' '}
            other standalone project{amountOfPortfolioItems > 1 && 's'}.
          </>
        }
      >
        {portfolioItems.map(ToPortfolioItemConverter)}
      </GenericSection>
      <GenericSection
        heading="Code boilerplates"
        shortIntro="As a freelancer to be, I have a steadily growing collection of boilerplate code that I can use for my clients!"
      >
        <Button onClick={() => openResourceInNewTab(BOILERPLATES_PATH)}>
          Check them out!
        </Button>
      </GenericSection>
      <GenericSection
        heading="Other work"
        shortIntro="I also gained valuable experience as an employee. Download my CV for the bigger picture!"
      >
        <Button onClick={() => openResourceInNewTab(CV_PATH)}>
          Download CV
        </Button>
      </GenericSection>
    </>
  );
};

export default Portfolio;
