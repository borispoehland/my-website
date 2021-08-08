import Image from 'next/image';
import {
  getPortfolioImageHeight,
  getPortfolioImageWidth,
} from '../../../utils/env';

interface IProps {
  src: string;
  alt: string;
}

const width = getPortfolioImageWidth();
const height = getPortfolioImageHeight();

const PortfolioImage = ({ alt, src }: IProps): JSX.Element => {
  return (
    <div className="portfolio-image">
      <div className="portfolio-image__blurred-wrapper">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="portfolio-image__blurred"
        />
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="portfolio-image__image"
      />
    </div>
  );
};

export default PortfolioImage;
