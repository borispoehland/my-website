import CMSBlockContent from '@components/CMSBlockContent/CMSBlockContent';
import { BlockContentType } from '@sanity/block-content-to-react';

const ToBlogPostBlockConverter = (block: BlockContentType): JSX.Element => {
  return (
    <section key={block[0]._key} className="blogpost-block">
      <CMSBlockContent blocks={block} />
      <hr />
    </section>
  );
};

export default ToBlogPostBlockConverter;
