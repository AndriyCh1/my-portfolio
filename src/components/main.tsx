import React from 'react';
import IntroSection from "./intro-section";
import AboutSection from "./about-section";
import SkillsSection from "./skills-section";
import CareerSection from "./career-section";

const Main = () => {
    return (
        <main className="main">
            <IntroSection />
            <AboutSection />
            <SkillsSection />
            <CareerSection />
        </main>
    );
};

export default Main;