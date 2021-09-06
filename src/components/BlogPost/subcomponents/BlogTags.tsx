import { ICommonBlog } from '@cmsclient/queries';

type IProps = Pick<ICommonBlog, 'tags'>;

const BlogTags = ({ tags }: IProps): JSX.Element => {
  if (!tags?.length) return <></>;

  return (
    <div className="blog-tags">
      {tags.map((tag) => {
        return (
          <div key={tag} className="blog-tag">
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default BlogTags;
