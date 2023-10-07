import BlockContent, { BlockContentType } from '@sanity/block-content-to-react';
import LinkSerializer from '@components/CMSBlockContent/subcomponents/LinkSerializer';
import CodeSerializer from '@components/CMSBlockContent/subcomponents/CodeSerializer';
import BlockContentSerializer from '@components/CMSBlockContent/subcomponents/BlockContentSerializer';
import { ComponentProps, PropsWithChildren } from 'react';
import ImageSerializer from '@components/CMSBlockContent/subcomponents/ImageSerializer';
import HighlightedBoxSerializer from '@components/CMSBlockContent/subcomponents/HighlightedBoxSerializer';
import BreakSerializer from '@components/CMSBlockContent/subcomponents/BreakSerializer';

interface IProps {
  blocks: BlockContentType;
}

const EmptyWrapper = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

const serializers = {
  marks: {
    link: LinkSerializer,
  },
  types: {
    codeWithHighlightedLines: CodeSerializer,
    block: BlockContentSerializer,
    image: (props: ComponentProps<typeof ImageSerializer>) => (
      <ImageSerializer {...props} className="mt-4" />
    ),
    highlightedBox: HighlightedBoxSerializer,
    break: BreakSerializer,
  },
  container: EmptyWrapper,
};

const CMSBlockContent = ({ blocks }: IProps): JSX.Element => {
  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
    />
  );
};

export default CMSBlockContent;
