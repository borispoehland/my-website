import ToServicesItemConverter from './converters/ToServicesItemConverter';
import getServices from '@data/services';
import { useRecoilValue } from 'recoil';
import { sTheme } from '@store';
import Button from '../Button/Button';
import GenericSection from '../GenericSection/GenericSection';
import NextLink from '../NextLink/NextLink';

const Services = (): JSX.Element => {
  const theme = useRecoilValue(sTheme);
  return (
    <>
      {getServices(theme).map(ToServicesItemConverter)}
      <GenericSection
        heading="My qualification"
        shortIntro={
          <>
            For further information about my qualification, check my{' '}
            <NextLink href="/portfolio">portfolio</NextLink> or check my CV
            below.
          </>
        }
      >
        <Button
          onClick={() =>
            window.open(
              'https://montescout.com/company/about/boris#my_career',
              '_blank'
            )
          }
        >
          View CV
        </Button>
      </GenericSection>
    </>
  );
};

export default Services;
