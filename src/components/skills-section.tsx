import React, { Fragment, useEffect, useState } from 'react';
import Section from './section';
import HTMLIcon from '../assets/images/html.png';
import CSSIcon from '../assets/images/css.png';
import JSIcon from '../assets/images/javascript.png';
import ReactIcon from '../assets/images/react.png';
import BootstrapIcon from '../assets/images/bootstrap.png';
import ReduxIcon from '../assets/images/redux.png';
import SASSIcon from '../assets/images/sass.png';

import NodeIcon from '../assets/images/node-js.png';
import ExpressIcon from '../assets/images/express.png';
import PostgreSQLIcon from '../assets/images/postgres.png';
import TypescriptIcon from '../assets/images/typescript.png';
import MongoDBIcon from '../assets/images/mongodb.png';
import TypeORMIcon from '../assets/images/typeorm.png';

interface ISkill {
  name: string;
  icon: any;
}

interface ICategory {
  category: string;
  skills: ISkill[];
}

const skills: ICategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: HTMLIcon },
      { name: 'CSS3', icon: CSSIcon },
      { name: 'Javascript', icon: JSIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'Redux', icon: ReduxIcon },
      { name: 'SASS', icon: SASSIcon },
      { name: 'Bootstrap', icon: BootstrapIcon },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: NodeIcon },
      { name: 'Express.js', icon: ExpressIcon },
      { name: 'Typescript', icon: TypescriptIcon },
      { name: 'PostgresSQL', icon: PostgreSQLIcon },
      { name: 'MongoDb', icon: MongoDBIcon },
      { name: 'TypeORM', icon: TypeORMIcon },
    ],
  },
];

const SkillsSection = () => {
  const [skillCategories, setSkillCategories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    const categories = skills.reduce(
      (items, current) => items.concat(current.category),
      [] as string[],
    );

    setSkillCategories(categories);
    setCurrentCategory(categories.length ? categories[0] : '');
  }, []);

  return (
    <Section title="Skills" className="skills">
      <div className="skills__tabs">
        {skillCategories.map((item, index) => (
          <p
            key={index}
            className={`skills__tabs__item ${item === currentCategory ? 'active' : ''}`}
            onClick={() => setCurrentCategory(item)}
          >
            {item}
          </p>
        ))}
      </div>
      {skills.map((categoryItem: ICategory, index) => (
        <Fragment key={index}>
          {categoryItem.category === currentCategory ? (
            <div className="skills__list">
              {categoryItem.skills.map((skillItem, skillItemIndex) => (
                <Skill key={skillItemIndex} name={skillItem.name} icon={skillItem.icon} />
              ))}
            </div>
          ) : null}
        </Fragment>
      ))}
    </Section>
  );
};

const Skill: React.FC<ISkill> = ({ name, icon }) => {
  return (
    <div className="skills__list__item">
      <div className="skills__list__item__image">
        <img src={icon} alt={name} />
      </div>
      <div className="skills__list__item__title">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default SkillsSection;
