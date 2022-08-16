import React, { useRef, useState } from 'react';
import {
  BsHouseFill as HomeIcon,
  BsTools as SkillsIcon,
  BsPersonFill as AboutIcon,
  BsBriefcaseFill as PortfolioIcon,
  BsFillEnvelopeFill as ContactIcon,
} from 'react-icons/bs';
import { GiHamburgerMenu as MenuBurger } from 'react-icons/gi';
import { MdTimeline as TimelineIcon } from 'react-icons/md';

const headerItems = [
  { icon: HomeIcon, display: 'home' },
  { icon: AboutIcon, display: 'about me' },
  { icon: SkillsIcon, display: 'my skills' },
  { icon: PortfolioIcon, display: 'portfolio' },
  { icon: TimelineIcon, display: 'career' },
  { icon: ContactIcon, display: 'contacts' },
];

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigationElement = useRef<HTMLDivElement>(null);
  const toggleNavigation = () => navigationElement.current?.classList.toggle('active');

  return (
    <nav className="navigation" ref={navigationElement}>
      <div className="navigation__mobile-toggle" onClick={() => toggleNavigation()}>
        <MenuBurger />
      </div>
      {headerItems.map((item, index) => (
        <div
          key={index}
          className={`navigation__item ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {item.icon({ className: 'navigation__item__icon' })}
          <span className="navigation__item__description">{item.display}</span>
        </div>
      ))}
    </nav>
  );
};

// TODO: rewrite burger menu logic

export default Navigation;
