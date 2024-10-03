import Footer from './footer';

import Header from './header';
import IntroSection from './intro-section';
import AboutSection from './about-section';
import SkillsSection from './skills-section';
import CareerSection from './career-section';
import PortfolioSection from './portfolio-section';
import ContactSection from './contact-section';

import { RefsProvider } from '../context/refs-provider';

const Layout = () => {
  return (
    <div className="main-wrapper">
      <RefsProvider>
        <Header />
        <main className="main">
          <IntroSection />
          <AboutSection />
          <SkillsSection />
          <CareerSection />
          <PortfolioSection />
          <ContactSection />
        </main>
      </RefsProvider>
      <Footer />
    </div>
  );
};

export default Layout;
