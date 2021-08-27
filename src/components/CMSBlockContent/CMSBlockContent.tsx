import BlockContent from '@sanity/block-content-to-react';
import LinkSerializer from '@components/CMSBlockContent/subcomponents/LinkSerializer';
import CodeSerializer from '@components/CMSBlockContent/subcomponents/CodeSerializer';

interface IProps {
  blocks: any[];
}

const serializers = {
  marks: {
    link: LinkSerializer,
  },
  types: {
    code: CodeSerializer,
  },
};

const CMSBlockContent = ({ blocks }: IProps): JSX.Element => {
  return <BlockContent blocks={blocks} serializers={serializers} />;
};

export default CMSBlockContent;
