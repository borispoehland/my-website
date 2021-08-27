import GenericSection from '@components/GenericSection/GenericSection';
import ToBlogOverviewItemConverter from '@components/BlogOverview/converters/ToBlogOverviewItemConverter';

interface IProps {
  blogPosts: any[];
}

const BlogOverview = ({ blogPosts }: IProps): JSX.Element => {
  return (
    <>
      <GenericSection heading="Latest blogposts" shortIntro="">
        {blogPosts.map(ToBlogOverviewItemConverter)}
      </GenericSection>
    </>
  );
};

export default BlogOverview;
