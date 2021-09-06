import { zip } from 'lodash';
import { useRecoilValue } from 'recoil';
import { sTheme } from '@store';
import { useMemoOne } from 'use-memo-one';
import { useAdaptLeftLaneItemHeight, useOpacityChangeOnScroll } from './hooks';
import { Controller, Scene } from 'react-scrollmagic';
import getIndexSections from '@data/indexSections';
import ToIndexSectionConverter from './converters/ToIndexSectionConverter';
import { useRouter } from 'next/router';
import { MutableRefObject, useRef } from 'react';

export interface IIndexSectionProps {
  rightLaneCliff: number;
  leftLaneOffset: number;
}

const IndexSections = ({
  rightLaneCliff,
  leftLaneOffset,
}: IIndexSectionProps): JSX.Element => {
  const theme = useRecoilValue(sTheme);
  const router = useRouter();
  const container = useRef() as MutableRefObject<HTMLDivElement>;

  const [leftLane, rightLane] = useMemoOne(() => {
    const pairs = getIndexSections(theme, router)
      .map((indexSection, i) => ({
        ...indexSection,
        imgPriority: i === 0,
      }))
      .map(ToIndexSectionConverter);
    return zip(...pairs); // [[left1, right1], [left2, right2]] => [[left1, left2], [right1, right2]]
  }, [theme, router]);

  useOpacityChangeOnScroll({ leftLaneOffset, rightLaneCliff });

  const { indexSectionHeight, indexSectionStartFromTopInPercent } =
    useAdaptLeftLaneItemHeight(container);

  return (
    <div className="index" ref={container}>
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
  rightLaneCliff: 0.5,
  leftLaneOffset: 200,
};

export default IndexSections;
