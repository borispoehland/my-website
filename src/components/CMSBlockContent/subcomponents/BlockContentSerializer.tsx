import BlockContent from '@sanity/block-content-to-react';
import GenericSection from '@components/GenericSection/GenericSection';
import { createElement } from 'react';

interface INodeProps {
  style: string;
}

interface IProps extends HasChildren {
  node: INodeProps;
}

const BlockContentSerializer = (props: IProps): JSX.Element => {
  const style = props.node.style;

  if (/^h\d/.test(style)) {
    return createElement(
      style,
      {
        id: encodeURI(props.children as string),
      },
      props.children
    );
  }

  if (style === 'normal') {
    return <>{props.children}</>;
  }

  // Fall back to default handling
  // @ts-ignore
  return BlockContent.defaultSerializers.types.block(props);
};

export default BlockContentSerializer;
