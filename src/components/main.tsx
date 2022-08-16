import React from 'react';
import IntroSection from './intro-section';
import AboutSection from './about-section';
import SkillsSection from './skills-section';
import CareerSection from './career-section';
import PortfolioSection from './portfolio-section';
import ContactSection from './contact-section';

const Main = () => {
  return (
    <main className="main">
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <CareerSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
};

export default Main;
