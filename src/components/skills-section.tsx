import React, {Fragment, RefObject, useEffect, useState} from 'react';

import Section from './section';

import skills, { ICategory, ISkill } from "../assets/data/skills-data";

interface IProps {
    refer?: RefObject<HTMLDivElement>;
}

const SkillsSection: React.FC<IProps> = ({refer}) => {
  const skillsData = skills.getAll();
  const [skillCategories, setSkillCategories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState('');

  useEffect(() => {
    const categories = skillsData.reduce(
      (items, current) => items.concat(current.category),
      [] as string[],
    );

    setSkillCategories(categories);
    setCurrentCategory(categories.length ? categories[0] : '');
  }, []);

  return (
    <Section refer={refer} title="Skills" className="skills">
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
      {skillsData.map((categoryItem: ICategory, index) => (
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

interface ISkillProps extends ISkill {}

const Skill: React.FC<ISkillProps> = ({ name, icon }) => {
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
