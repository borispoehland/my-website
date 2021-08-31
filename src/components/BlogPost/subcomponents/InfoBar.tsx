import { useMemoOne } from 'use-memo-one';
import Moment from 'react-moment';
import { BsClock } from 'react-icons/bs';

interface IProps {
  body: any[];
  tags: string[];
  publishedAt: string;
}

const InfoBar = ({ body, tags, publishedAt }: IProps): JSX.Element => {
  const estimatedReadingTime = useMemoOne(() => {
    const amountOfWords = body
      .filter((item) => item.style === 'normal')
      .reduce((acc, curr) => {
        return (
          acc +
          curr.children.reduce(
            (acc: number, textObj: { text: string }) =>
              acc + textObj.text.length,
            0
          )
        );
      }, 0);
    return Math.ceil(amountOfWords / 5 / 180);
  }, []);

  return (
    <section className="blog-info">
      <div className="blog-info__published-at">
        <Moment format="MMM DD, YYYY">{publishedAt}</Moment>
      </div>
      <div className="blog-info__reading-time">
        <BsClock />
        {estimatedReadingTime} Min read
      </div>
      {tags?.length && (
        <div className="blog-info__tags">
          {tags.map((tag) => {
            return (
              <div key={tag} className="blog-tag">
                {tag}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default InfoBar;
