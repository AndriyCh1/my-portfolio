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
          Hi, I am <span>Andrii Chekanovskyi</span>
        </h2>
        <p className="intro__info__subtitle"> Junior Full Stack Developer</p>
        <div className="intro__info__btns">
          <a href="https://drive.google.com/file/d/1e2lTwkoI57yxPFCppb6BzCViXnPx2ZpZ/view?usp=share_link" target="_blank">
            <Button className="intro__info__btns__btn" variant="secondary">Look at the resume in pdf format</Button>
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