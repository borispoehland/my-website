import { zip } from 'lodash';
import { useRecoilValue } from 'recoil';
import { sTheme } from '@store';
import { useMemoOne } from 'use-memo-one';
import { useAdaptLeftLaneItemHeight, useOpacityChangeOnScroll } from './hooks';
import { Controller, Scene } from 'react-scrollmagic';
import getIndexSections from '@data/indexSections';
import ToIndexSectionConverter from './converters/ToIndexSectionConverter';
import { useRouter } from 'next/router';

interface IProps {
  startRightLaneTransitionAtPercent: number;
  topOffset: number;
}

const IndexSections = ({
  startRightLaneTransitionAtPercent,
  topOffset,
}: IProps): JSX.Element => {
  const theme = useRecoilValue(sTheme);
  const router = useRouter();

  const [leftLane, rightLane] = useMemoOne(() => {
    const pairs = getIndexSections(theme, router)
      .map((indexSection, i) => ({
        ...indexSection,
        imgPriority: i === 0,
      }))
      .map(ToIndexSectionConverter);
    return zip(...pairs); // [[left1, right1], [left2, right2]] => [[left1, left2], [right1, right2]]
  }, [theme, router]);

  useOpacityChangeOnScroll(topOffset, startRightLaneTransitionAtPercent);

  const { indexSectionHeight, indexSectionStartFromTopInPercent } =
    useAdaptLeftLaneItemHeight();

  return (
    <div className="index">
      <div className="index__left-lane">{leftLane}</div>
      <div className="index__right-lane">
        <Controller>
          <Scene
            duration={`${(leftLane.length - 1) * indexSectionHeight}`}
            pin
            triggerHook={indexSectionStartFromTopInPercent}
          >
            <div
              className="right-lane-wrapper"
              // workaround to set the style here because the dom element doesn't exist within useEffect because of scrollmagic
              style={{ minHeight: indexSectionHeight }}
            >
              {rightLane}
            </div>
          </Scene>
        </Controller>
      </div>
    </div>
  );
};

IndexSections.defaultProps = {
  startRightLaneTransitionAtPercent: 0.5,
  topOffset: 200,
};

export default IndexSections;
