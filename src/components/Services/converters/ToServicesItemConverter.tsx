import Image from 'next/image';
import { ReactNode } from 'react';
import GenericSection from '@components/GenericSection/GenericSection';

export interface IServiceItem {
  heading: string;
  description: ReactNode;
  imgSrc: string;
}

const ToServicesItemConverter = ({
  description,
  heading,
  imgSrc,
}: IServiceItem): JSX.Element => {
  return (
    <GenericSection key={heading}>
      <section className="services-item">
        <h2 className="services-item__heading">{heading}</h2>
        <div className="services-item__image">
          <Image src={imgSrc} alt="" width="1920" height="1080" priority />
        </div>
        <div className="services-item__description">{description}</div>
      </section>
    </GenericSection>
  );
};

export default ToServicesItemConverter;
