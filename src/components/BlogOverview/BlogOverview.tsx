import GenericSection from '@components/GenericSection/GenericSection';
import ToBlogOverviewItemConverter from '@components/BlogOverview/converters/ToBlogOverviewItemConverter';
import { ICommonBlog } from '@cmsclient/queries';

interface IProps {
  blogPosts: ICommonBlog[];
}

const BlogOverview = ({ blogPosts }: IProps): JSX.Element => {
  return (
    <GenericSection heading="Latest blogposts">
      {blogPosts.map(ToBlogOverviewItemConverter)}
    </GenericSection>
  );
};

export default BlogOverview;
