import BlogToc from './subcomponents/BlogToc';
import GenericSection from '@components/GenericSection/GenericSection';
import { BlockContentType } from '@sanity/block-content-to-react';
import {
  useHeadingsForToc,
  useSplitContentOnSectionBreaks,
} from '@components/BlogPost/hooks';
import ToBlogPostBlockConverter from '@components/BlogPost/converters/ToBlogPostBlockConverter';

interface IProps {
  content: BlockContentType[];
}

const BlogPost = ({ content }: IProps): JSX.Element => {
  const contentSplitIntoSections = useSplitContentOnSectionBreaks(content);

  const headings = useHeadingsForToc();

  return (
    <GenericSection className="blogpost" tag="article">
      <BlogToc headings={headings} />
      <div className="blogpost__content">
        {contentSplitIntoSections.map(ToBlogPostBlockConverter)}
      </div>
    </GenericSection>
  );
};

export default BlogPost;
