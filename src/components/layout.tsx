import React, { useRef } from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Main from './main';
import {
  BsBriefcaseFill as PortfolioIcon,
  BsFillEnvelopeFill as ContactIcon,
  BsHouseFill as HomeIcon,
  BsPersonFill as AboutIcon,
  BsTools as SkillsIcon,
} from 'react-icons/bs';
import { MdTimeline as TimelineIcon } from 'react-icons/md';
import IntroSection from './intro-section';
import AboutSection from './about-section';
import SkillsSection from './skills-section';
import CareerSection from './career-section';
import PortfolioSection from './portfolio-section';
import ContactSection from './contact-section';
import {INavigationItem} from "../common/interfaces";

const Layout = () => {

  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navItems: INavigationItem<HTMLDivElement>[] = [
    { icon: HomeIcon, display: 'home', to: introRef },
    { icon: AboutIcon, display: 'about me', to: aboutRef },
    { icon: SkillsIcon, display: 'my skills', to: skillsRef },
    { icon: PortfolioIcon, display: 'portfolio', to: careerRef },
    { icon: TimelineIcon, display: 'career', to: portfolioRef },
    { icon: ContactIcon, display: 'contacts', to: contactRef },
  ];

  return (
    <div className="main-wrapper">
      <Navigation items={navItems} />
      <main className="main">
        <IntroSection refer={introRef} />
        <AboutSection refer={aboutRef}/>
        <SkillsSection refer={skillsRef}/>
        <CareerSection refer={careerRef}/>
        <PortfolioSection refer={portfolioRef}/>
        <ContactSection refer={contactRef}/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
