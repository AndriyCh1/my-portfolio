import { useContext, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  BsFillTelephoneFill as PhoneIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';
import { MdEmail as EmailIcon } from 'react-icons/md';
import Section from './section';
import { RefsContext } from '../context/refs-provider';
import { useInView } from 'react-intersection-observer';

const contactsVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const AboutSection = () => {
  const refer = useRef<HTMLDivElement>(null);
  const refsContext = useContext(RefsContext);
  const contactsControls = useAnimation();
  const { ref: contactsRef, inView: contactsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    refsContext?.setAbout(refer);
  }, [refer]);

  useEffect(() => {
    if (contactsInView) {
      contactsControls.start('visible');
    }
  }, [contactsControls, contactsInView]);

  return (
    <Section refer={refer} title="About me" className="about">
      <div ref={contactsRef} />
      <div className="about__text">
        <p>
          I’m a passionate and dedicated Software Engineer with a Bachelor's in Computer Science.
          <br /> I have 2 years of professional experience in web development. My technical
          expertise spans back-end and front-end development, with deep knowledge of
          JavaScript/Typescript, React, and Node.js. I thrive in challenging environments,
          constantly aiming to improve my skills and adapt to new technologies.
        </p>
      </div>
      <div className="about__contacts">
        <motion.a
          animate={contactsControls}
          initial="hidden"
          variants={contactsVariant}
          transition={{ duration: 2, delay: 0.5 }}
          href="mailto: achekanovskiy@gmail.com"
          className="about__contacts__item"
        >
          <div className="about__contacts__item__icon">
            <EmailIcon />
          </div>
          <div className="about__contacts__item__details">
            <p>Email</p>
            <p>achekanovskiy@gmail.com</p>
          </div>
        </motion.a>
        <motion.a
          animate={contactsControls}
          initial="hidden"
          variants={contactsVariant}
          transition={{ duration: 2, delay: 0.7 }}
          href="https://www.linkedin.com/in/andrii-chekanovskyi-28413a1a1/"
          className="about__contacts__item"
        >
          <div className="about__contacts__item__icon">
            <LinkedinIcon />
          </div>
          <div className="about__contacts__item__details">
            <p>LinkedIn</p>
          </div>
        </motion.a>
        <motion.a
          animate={contactsControls}
          initial="hidden"
          variants={contactsVariant}
          transition={{ duration: 2, delay: 0.9 }}
          href="https://github.com/AndriyCh1"
          className="about__contacts__item"
        >
          <div className="about__contacts__item__icon">
            <GithubIcon />
          </div>
          <div className="about__contacts__item__details">
            <p>GitHub</p>
          </div>
        </motion.a>
        <motion.a
          animate={contactsControls}
          initial="hidden"
          variants={contactsVariant}
          transition={{ duration: 2, delay: 1.1 }}
          href="tel:17197993745"
          className="about__contacts__item"
        >
          <div className="about__contacts__item__icon">
            <PhoneIcon />
          </div>
          <div className="about__contacts__item__details">
            <p>Phone</p>
            <p>+17197993745</p>
          </div>
        </motion.a>
      </div>
    </Section>
  );
};

export default AboutSection;
