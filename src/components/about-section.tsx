import React, {RefObject} from 'react';
import Section from './section';
import {
  BsFillTelephoneFill as PhoneIcon,
  BsLinkedin as LinkedinIcon,
  BsGithub as GithubIcon,
} from 'react-icons/bs';
import { MdEmail as EmailIcon } from 'react-icons/md';

interface IProps {
  refer?: RefObject<HTMLDivElement>;
}

const AboutSection: React.FC<IProps> = ({refer}) => {
  return (
    <Section refer={refer} title="About" className="about">
      <div className="about__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident
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
        <a href="https://www.linkedin.com/in/andrii-chekanovskyi-28413a1a1/" className="about__contacts__item">
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
