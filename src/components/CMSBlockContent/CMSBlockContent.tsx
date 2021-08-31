import BlockContent from '@sanity/block-content-to-react';
import LinkSerializer from '@components/CMSBlockContent/subcomponents/LinkSerializer';
import CodeSerializer from '@components/CMSBlockContent/subcomponents/CodeSerializer';
import BlockContentSerializer from '@components/CMSBlockContent/subcomponents/BlockContentSerializer';
import { PropsWithChildren } from 'react';
import ImageSerializer from '@components/CMSBlockContent/subcomponents/ImageSerializer';

interface IProps {
  blocks: any[];
}

const EmptyWrapper = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

const serializers = {
  marks: {
    link: LinkSerializer,
  },
  types: {
    code: CodeSerializer,
    block: BlockContentSerializer,
    image: ImageSerializer,
  },
  container: EmptyWrapper,
};

const CMSBlockContent = ({ blocks, ...props }: IProps): JSX.Element => {
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
