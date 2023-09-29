import getPortfolio from '@data/portfolio';
import ToPortfolioItemConverter from './converters/ToPortfolioItemConverter';
import Button from '../Button/Button';
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
        shortIntro={
          <>
            Apart from this website I coded (on) <b>{amountOfPortfolioItems}</b>{' '}
            other project{amountOfPortfolioItems > 1 && 's'}.
          </>
        }
      >
        {portfolioItems.map(ToPortfolioItemConverter)}
      </GenericSection>
      {/* <GenericSection
        heading="Code boilerplates"
        shortIntro="As a freelancer to be, I have a steadily growing collection of boilerplate code that I can use for my clients!"
      >
        <Button onClick={() => openResourceInNewTab(BOILERPLATES_PATH)}>
          Check them out!
        </Button>
      </GenericSection> */}
      <GenericSection
        heading="Other work"
        shortIntro="Feel free to check my CV for my other work!"
      >
        <Button
          onClick={() =>
            window.open(
              'https://montescout.com/company/about/boris#my_career',
              '_blank'
            )
          }
        >
          Download CV
        </Button>
      </GenericSection>
    </>
  );
};

export default Portfolio;
