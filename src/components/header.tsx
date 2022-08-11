import React, { useState } from 'react';
import { BsHouseFill as HomeIcon } from 'react-icons/bs';
import { BsPersonFill as AboutIcon } from 'react-icons/bs';
import { BsBriefcaseFill as PortfolioIcon } from 'react-icons/bs';
import { BsFillEnvelopeFill as ContactIcon } from 'react-icons/bs';

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

  return (
    <header className="header">
      {headerItems.map((item, index) => (
        <div
          key={index}
          className={`header__item ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {item.icon({ className: 'header__item__icon' })}
        </div>
      ))}
    </header>
  );
};

export default Header;
