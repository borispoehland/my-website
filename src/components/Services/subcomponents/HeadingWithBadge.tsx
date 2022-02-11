import { IconType } from 'react-icons';

interface IProps {
  heading: string;
  badgeText: string;
  badgeBorderColor?: string;
  Icon: IconType;
}

const HeadingWithBadge = ({
  heading,
  badgeText,
  badgeBorderColor,
  Icon,
}: IProps): JSX.Element => {
  return (
    <div className="heading-with-badge">
      {heading}
      <div
        className="heading-with-badge__badge"
        style={{ borderColor: badgeBorderColor }}
      >
        <Icon />
        {badgeText}
      </div>
    </div>
  );
};

HeadingWithBadge.defaultProps = {
  badgeBorderColor: 'orange',
};

export default HeadingWithBadge;
