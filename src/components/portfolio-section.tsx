import React, { useContext, useEffect, useRef } from 'react';

import portfolio, { IPortfolioItem } from '../assets/data/portfolio-data';

import Section from './section';

import { BsGithub as GithubIcon } from 'react-icons/bs';
import { BiLinkAlt as LinkIcon } from 'react-icons/bi';

import { RefsContext } from '../context/refs-provider';

const PortfolioSection = () => {
  const portfolioData = portfolio.getAll();

  const refer = useRef<HTMLDivElement>(null);
  const refsContext = useContext(RefsContext);

  useEffect(() => {
    refsContext?.setPortfolio(refer);
  }, [refer]);

  return (
    <Section refer={refer} title="Portfolio" className="portfolio">
      <div className="portfolio-list">
        {portfolioData.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
            githubLink={item.githubLink}
            hostingLink={item.hostingLink}
          />
        ))}
      </div>
    </Section>
  );
};

interface PortfolioItemProps extends IPortfolioItem {}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  img,
  githubLink,
  hostingLink,
}) => {
  return (
    <div className="portfolio-list__item">
      <div className="portfolio-list__item__up">
        <div className="portfolio-list__item__image">
          <img src={img} alt="" />
        </div>
        <div className="portfolio-list__links">
          <h3>{title}</h3>
          <div className="portfolio-list__links__icons">
            <a href={githubLink}>
              <GithubIcon />
            </a>
            <a href={hostingLink || '#'} className={hostingLink || 'unavailable'}>
              <LinkIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-list__item__down">
        <p className="portfolio-list__item__info">
          <span>{title}</span>
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
};

export default PortfolioSection;
