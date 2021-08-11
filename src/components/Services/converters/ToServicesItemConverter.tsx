import Image from 'next/image';
import { ReactNode } from 'react';
import Anchor from '../../Anchor/Anchor';

export interface IServiceItem {
  heading: string;
  description: ReactNode;
  imgSrc: string;
  anchorId: string;
}

const ToServicesItemConverter = ({
  anchorId,
  description,
  heading,
  imgSrc,
}: IServiceItem): JSX.Element => {
  return (
    <section key={heading} className="generic-layout__section">
      <Anchor id={anchorId} />
      <div className="services-item">
        <h1 className="services-item__heading">{heading}</h1>
        <div className="services-item__image">
          <Image
            src={imgSrc}
            alt=""
            width="1920"
            height="1080"
            quality={100}
            priority
          />
        </div>
        <div className="services-item__description">{description}</div>
        <hr className="services-item__divider" />
      </div>
    </section>
  );
};

export default ToServicesItemConverter;
