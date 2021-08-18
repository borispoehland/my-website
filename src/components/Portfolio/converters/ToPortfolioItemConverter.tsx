import { ReactNode, useRef, useState } from 'react';
import Button from '@components/Button/Button';
import NextLink from '@components/NextLink/NextLink';
import ConditionalWrapper from '@helpers/ConditionalWrapper';
import { ITechnology } from '@data/technologies';
import PortfolioImage from '../subcomponents/PortfolioImage';
import { openResourceInNewTab } from '@utils/dom';
import cx from 'classnames';
import useInView from 'react-cool-inview';

export interface IPortfolioItem {
  appetizer: ReactNode;
  name: string;
  tags: ITechnology[];
  imgFolder: string;
  imgFilename?: string;
  href?: string;
  customActionButton?: ReactNode;
}

const ToPortfolioItemConverter = ({
  appetizer,
  name,
  tags,
  imgFolder,
  imgFilename,
  href,
  customActionButton,
}: IPortfolioItem): JSX.Element => {
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
  });

  return (
    <section
      key={name}
      className={cx('portfolio-item', { '--in-view': inView })}
      ref={observe}
    >
      <div className="portfolio-item__name">
        <h3>{name}</h3>
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
            src={`/img/portfolio-page/${imgFolder}/${
              imgFilename ?? 'main'
            }.png`}
            alt={`Image of the ${name}`}
          />
        </ConditionalWrapper>
      </div>
      <div className="portfolio-item__appetizer">{appetizer}</div>
      {customActionButton ? (
        <div className="portfolio-item__action">{customActionButton}</div>
      ) : (
        href && (
          <div className="portfolio-item__action">
            <Button onClick={() => openResourceInNewTab(href)}>
              Visit site
            </Button>
          </div>
        )
      )}
    </section>
  );
};

export default ToPortfolioItemConverter;
