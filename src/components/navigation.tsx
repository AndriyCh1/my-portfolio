import React, { RefObject, useContext, useRef, useState } from 'react';

import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi';
import {
  BsBriefcaseFill as PortfolioIcon,
  BsFillEnvelopeFill as ContactIcon,
  BsHouseFill as HomeIcon,
  BsPersonFill as AboutIcon,
  BsTools as SkillsIcon,
  BsXLg as CloseMenuIcon,
} from 'react-icons/bs';
import { MdTimeline as TimelineIcon } from 'react-icons/md';

import { RefsContext } from '../context/refs-provider';

interface INavigationItem {
  icon: any;
  display: string;
  toRef?: RefObject<HTMLDivElement>;
}

const Navigation = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigationElement = useRef<HTMLDivElement>(null);
  const toggleNavigation = () => navigationElement.current?.classList.toggle('active');

  const refsContext = useContext(RefsContext);

  const navItems: INavigationItem[] = [
    { icon: HomeIcon, display: 'home', toRef: refsContext?.intro || undefined },
    { icon: AboutIcon, display: 'about me', toRef: refsContext?.about || undefined },
    { icon: SkillsIcon, display: 'my skills', toRef: refsContext?.skills || undefined },
    { icon: TimelineIcon, display: 'career', toRef: refsContext?.career || undefined },
    { icon: PortfolioIcon, display: 'portfolio', toRef: refsContext?.portfolio || undefined },
    { icon: ContactIcon, display: 'contacts', toRef: refsContext?.contact || undefined },
  ];

  const handleClick = (to: RefObject<HTMLDivElement>) => {
    to.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navigation" ref={navigationElement}>
      <div className="navigation__mobile-toggle" onClick={() => toggleNavigation()}>
        <MenuIcon className="menu-icon" />
        <CloseMenuIcon className="close-menu-icon" />
      </div>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`navigation__item ${activeTab === index ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(index);
            toggleNavigation();
            if (item.toRef) {
              handleClick(item.toRef);
            }
          }}
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
