import React from 'react';
import Section from './section';
// @ts-ignore
import IntroPhoto from '../assets/images/intro-photo.jpg';
import Button from './button';

const IntroSection = () => {
  return (
    <Section>
      <div className="intro">
        <div className="intro__info">
          <h2 className="intro__info__title">
            Hi, I am <span>Chekanovskyi Andrii</span>
          </h2>
          <p className="intro__info__subtitle"> Fullstack Developer</p>
          <div className="intro__info__btns">
            <Button className="intro__info__btns__btn" variant="secondary">
              Download CV
            </Button>
            <Button className="intro__info__btns__btn" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
        <div className="intro__image">
          <img src={IntroPhoto} alt="" />
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;
