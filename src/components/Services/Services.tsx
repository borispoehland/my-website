import ToServicesItemConverter from './converters/ToServicesItemConverter';
import getServices from '@data/services';
import { useRecoilValue } from 'recoil';
import { sTheme } from '@store';
import Button from '../Button/Button';
import { openResourceInNewTab } from '@utils/dom';
import GenericSection from '../GenericSection/GenericSection';
import NextLink from '../NextLink/NextLink';
import { CV_PATH } from '@utils/paths';

const Services = (): JSX.Element => {
  const theme = useRecoilValue(sTheme);
  return (
    <>
      {getServices(theme).map(ToServicesItemConverter)}
      <GenericSection
        id="cv"
        heading="My qualification"
        shortIntro={
          <>
            For further information about my qualification, check my{' '}
            <NextLink href="/portfolio">portfolio</NextLink> or download my CV
            below.
          </>
        }
      >
        <Button onClick={() => openResourceInNewTab(CV_PATH)}>
          Download CV
        </Button>
      </GenericSection>
    </>
  );
};

export default Services;
