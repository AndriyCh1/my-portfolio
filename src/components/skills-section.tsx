import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skills, { ICategory, ISkill } from '../assets/data/skills-data';
import Section from './section';
import { RefsContext } from '../context/refs-provider';

const SkillsSection = () => {
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

  const refer = useRef<HTMLDivElement>(null);
  const refsContext = useContext(RefsContext);

  useEffect(() => {
    refsContext?.setSkills(refer);
  }, [refer]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section refer={refer} title="Skills" className="skills">
      <div className="skills__tabs">
        {skillCategories.map((item, index) => (
          <div
            key={index}
            className={`skills__tabs__item ${item === currentCategory ? 'active' : ''}`}
            onClick={() => setCurrentCategory(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {skillsData.map((categoryItem: ICategory, index) =>
          categoryItem.category === currentCategory ? (
            <motion.div
              key={index}
              className="skills__list"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 0.3 }}
            >
              {categoryItem.skills.map((skillItem, skillItemIndex) => (
                <Skill key={skillItemIndex} name={skillItem.name} icon={skillItem.icon} />
              ))}
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>
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
