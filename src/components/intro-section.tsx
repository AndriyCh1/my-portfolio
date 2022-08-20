import React, {RefObject, useContext, useEffect, useRef} from 'react';
import Section from './section';
import IntroPhoto from '../assets/images/intro-photo.jpg';
import Button from './button';
import {RefsContext} from "../context/refs-provider";

const IntroSection = () => {
    const refer = useRef<HTMLDivElement>(null)
    const refsContext = useContext(RefsContext);

    useEffect(() => {
        refsContext?.setIntro(refer);
    }, [refer])

    return (
    <Section refer={refer} className="intro">
      <div className="intro__info">
        <h2 className="intro__info__title">
          Hi, I am <span>Chekanovskyi Andrii</span>
        </h2>
        <p className="intro__info__subtitle"> Fullstack Developer</p>
        <div className="intro__info__btns">
          <a href="../assets/pdf/CV.pdf" target="_blank" download>
            <Button className="intro__info__btns__btn" variant="secondary">
              Download CV
            </Button>
          </a>
        </div>
      </div>
      <div className="intro__image">
        <img src={IntroPhoto} alt="" />
      </div>
    </Section>
  );
};

export default IntroSection;
