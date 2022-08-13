import React, {useRef, useState} from 'react';
import { BsHouseFill as HomeIcon } from 'react-icons/bs';
import { BsPersonFill as AboutIcon } from 'react-icons/bs';
import { BsBriefcaseFill as PortfolioIcon } from 'react-icons/bs';
import { BsFillEnvelopeFill as ContactIcon } from 'react-icons/bs';
import { GiHamburgerMenu as MenuBurger } from 'react-icons/gi';

const headerItems = [
  {
    icon: HomeIcon,
    display: 'home',
  },
  {
    icon: AboutIcon,
    display: 'about me',
  },
  {
    icon: PortfolioIcon,
    display: 'portfolio',
  },
  {
    icon: ContactIcon,
    display: 'contacts',
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigationElement = useRef<HTMLDivElement>(null);
  const toggleNavigation = () =>  navigationElement.current?.classList.toggle("active")

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

export default Header;
