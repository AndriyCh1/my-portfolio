import React, { RefObject, useRef, useState } from 'react';
import { GiHamburgerMenu as MenuIcon } from 'react-icons/gi';
import { BsXLg as CloseMenuIcon } from 'react-icons/bs';
import { INavigationItem } from '../common/interfaces';

interface IProps {
  items: INavigationItem<HTMLDivElement>[];
}

const Navigation: React.FC<IProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);
  const navigationElement = useRef<HTMLDivElement>(null);
  const toggleNavigation = () => navigationElement.current?.classList.toggle('active');

  const handleClick = (to: RefObject<HTMLDivElement>) => {
    to.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navigation" ref={navigationElement}>
      <div className="navigation__mobile-toggle" onClick={() => toggleNavigation()}>
        <MenuIcon className="menu-icon"/>
        <CloseMenuIcon className="close-menu-icon" />
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`navigation__item ${activeTab === index ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(index);
            toggleNavigation();
            if (item.to) {
              handleClick(item.to);
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
