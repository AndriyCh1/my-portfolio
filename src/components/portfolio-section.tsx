import React from 'react';
import Section from './section';

import { BsGithub as GithubIcon } from 'react-icons/bs';
import { BiLinkAlt as LinkIcon } from 'react-icons/bi';

import todoImg from '../assets/images/portfolio/todo.png';
import schedulerImg from '../assets/images/portfolio/scheduler.png';
import tourImg from '../assets/images/portfolio/tour-manag.png';

interface IPortfolioItem {
  title: string;
  description: string;
  img: any;
  githubLink: string;
  hostingLink?: string;
}

const portfolioItems: IPortfolioItem[] = [
  {
    title: 'ToDo',
    description: 'psum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod',
    img: todoImg,
    githubLink: 'https://github.com/AndriyCh1/Todo',
    hostingLink: 'https://todo-app311.herokuapp.com/',
  },
  {
    title: 'Task Scheduler',
    description:
      'psum dolor sit amet, consectetur adipiscing elit,consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod',
    img: schedulerImg,
    githubLink: 'https://github.com/AndriyCh1/Scheduler',
    hostingLink: 'https://scheduler-app31.herokuapp.com/',
  },
  {
    title: 'Tour management',
    description:
      'psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod',
    img: tourImg,
    githubLink: 'https://github.com/AndriyCh1/travel-agency',
    hostingLink: 'https://agency-web31.herokuapp.com/',
  }
];

const PortfolioSection = () => {
  return (
    <Section title="Portfolio" className="portfolio">
      <div className="portfolio-list">
        {portfolioItems.map((item, index) => (
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
          <span>{title}</span> {description}
        </p>
      </div>
    </div>
  );
};

export default PortfolioSection;
