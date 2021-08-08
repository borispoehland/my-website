import { ReactNode } from 'react';
import Button from '../../Button/Button';
import NextLink from '../../NextLink/NextLink';
import ConditionalWrapper from '../../../helpers/ConditionalWrapper';
import { useCallbackOne } from 'use-memo-one';
import { ITechnology } from '../../../staticdata/technologies';
import PortfolioImage from '../subcomponents/PortfolioImage';

export interface IPortfolioItem {
  appetizer: ReactNode;
  name: string;
  href?: string;
  tags: ITechnology[];
  imgFolder: string;
  imgFilename: string;
}

const ToPortfolioItemConverter = ({
  appetizer,
  name,
  tags,
  imgFolder,
  imgFilename,
  href,
}: IPortfolioItem): JSX.Element => {
  const openLinkInNewTab = useCallbackOne((href: string) => {
    window.open(href, '__blank');
  }, []);

  return (
    <section key={name} className="portfolio-item">
      <div className="portfolio-item__name">
        <h2>{name}</h2>
      </div>
      {tags.length && (
        <div className="portfolio-item__tags">
          {tags.map(({ name, borderColor }) => {
            return (
              <div
                key={name}
                className="portfolio-tag"
                style={{ borderColor: borderColor }}
              >
                {name}
              </div>
            );
          })}
        </div>
      )}
      <div className="portfolio-item__image">
        <ConditionalWrapper
          condition={Boolean(href)}
          wrapper={(children) => (
            <NextLink href={href as string}>{children}</NextLink>
          )}
        >
          <PortfolioImage
            src={`/img/portfolio-page/${imgFolder}/${imgFilename}.png`}
            alt={`Image of the ${name}`}
          />
        </ConditionalWrapper>
      </div>
      <div className="portfolio-item__appetizer">{appetizer}</div>
      {href && (
        <div className="portfolio-item__action">
          <Button onClick={() => openLinkInNewTab(href)}>Enter site</Button>
        </div>
      )}
    </section>
  );
};

export default ToPortfolioItemConverter;