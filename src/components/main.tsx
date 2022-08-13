import React from 'react';
import IntroSection from "./intro-section";
import AboutSection from "./about-section";
import SkillsSection from "./skills-section";

const Main = () => {
    return (
        <main className="main">
            <IntroSection />
            <AboutSection />
            <SkillsSection />
        </main>
    );
};

export default Main;