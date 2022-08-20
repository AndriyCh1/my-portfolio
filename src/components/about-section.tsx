import React, { useContext, useEffect, useRef } from 'react';

import {
  BsFillTelephoneFill as PhoneIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';
import { MdEmail as EmailIcon } from 'react-icons/md';

import Section from './section';

import { RefsContext } from '../context/refs-provider';

const AboutSection = () => {
  const refer = useRef<HTMLDivElement>(null);
  const refsContext = useContext(RefsContext);

  useEffect(() => {
    refsContext?.setAbout(refer);
  }, [refer]);

  return (
    <Section refer={refer} title="About me" className="about">
      <div className="about__text">
        <p>
          Hi! My name is Andriy, I am a 4th year student majoring in Computer Science at Ternopil
          National University. I had several months of work experience as a Full Stack Developer in
          a small company, which I joined after training. I spend most of my time studying and
          learning something new, every day I study new material and improve my skills.
        </p>
      </div>
      <div className="about__contacts">
        <a href="mailto: achekanovskiy@gmail.com" className="about__contacts__item">
          <div className="about__contacts__item__icon">
            <EmailIcon />
          </div>
          <div className="about__contacts__item__details">
            <p>Email</p>
            <p>achekanovskiy@gmail.com</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/andrii-chekanovskyi-28413a1a1/"
          className="about__contacts__item"
        >
          <div className="about__contacts__item__icon">
            <LinkedinIcon />
          </div>
          <div className="about__contacts__item__details">
            <p>LinkedIn</p>
          </div>
        </a>
        <a href="https://github.com/AndriyCh1" className="about__contacts__item">
          <div className="about__contacts__item__icon">
            <GithubIcon />
          </div>
          <div className="about__contacts__item__details">
            <p>GitHub</p>
          </div>
        </a>
        <a href="tel:3809717044" className="about__contacts__item">
          <div className="about__contacts__item__icon">
            <PhoneIcon />
          </div>
          <div className="about__contacts__item__details">
            <p>Phone</p>
            <p>+3809717044</p>
          </div>
        </a>
      </div>
    </Section>
  );
};

export default AboutSection;
