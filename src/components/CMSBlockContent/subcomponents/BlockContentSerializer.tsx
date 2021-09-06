import BlockContent from '@sanity/block-content-to-react';
import { createElement } from 'react';

interface INodeProps {
  style: string;
  children: any;
}

interface IProps extends HasChildren {
  node: INodeProps;
}

const BlockContentSerializer = (props: IProps): JSX.Element => {
  const style = props.node.style;

  const isHeading = /^h\d/.test(style);

  if (isHeading) {
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
