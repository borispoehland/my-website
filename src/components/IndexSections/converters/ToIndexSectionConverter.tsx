import Image from 'next/image';
import { IIndexSection } from '../IndexSections';

const LeftLaneItem = ({
  heading,
  imgAlt,
  imgSrc,
  textContent,
  actionButton,
}: IIndexSection) => (
  <div className="left-lane-item">
    <div className="left-lane-item__image">
      <Image src={imgSrc} width={1920} height={1080} alt={imgAlt} />
    </div>
    <div className="left-lane-item__heading">
      <h1>{heading}</h1>
    </div>
    <div className="left-lane-item__text">{textContent}</div>
    {actionButton && (
      <div className="left-lane-item__action">{actionButton}</div>
    )}
  </div>
);

const RightLaneItem = ({ imgAlt, imgSrc }: IIndexSection) => (
  <div className="right-lane-item">
    <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="contain" />
  </div>
);

const ToIndexSectionConverter = (props: IIndexSection) => {
  const { heading } = props;
  return [
    <LeftLaneItem key={heading} {...props} />,
    <RightLaneItem key={heading} {...props} />,
  ];
};

export default ToIndexSectionConverter;
