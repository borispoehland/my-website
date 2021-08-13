import ToServicesItemConverter from './converters/ToServicesItemConverter';
import getServices from '../../staticdata/services';
import { useRecoilValue } from 'recoil';
import { sTheme } from '../../store';
import Anchor from '../Anchor/Anchor';
import Button from '../Button/Button';
import { openResourceInNewTab } from '../../utils/dom';

interface IProps {}

const Services = (): JSX.Element => {
  const theme = useRecoilValue(sTheme);
  return (
    <div className="generic-layout">
      {getServices(theme).map(ToServicesItemConverter)}
      <section className="generic-layout__section">
        <Anchor id="cv" />
        <h1>My qualification</h1>
        <p>
          To conduct further due diligence on my background, download my CV
          below:
        </p>
        <Button onClick={() => openResourceInNewTab('/files/cv.pdf')}>
          Download CV
        </Button>
        <hr />
      </section>
    </div>
  );
};

export default Services;
