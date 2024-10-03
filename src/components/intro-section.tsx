import { useContext, useEffect, useRef } from 'react';
import Section from './section';
import IntroPhoto from '../assets/images/intro-photo.jpg';
import Button from './button';
import { RefsContext } from '../context/refs-provider';

const IntroSection = () => {
  const refer = useRef<HTMLDivElement>(null);
  const refsContext = useContext(RefsContext);

  useEffect(() => {
    refsContext?.setIntro(refer);
  }, [refer]);

  return (
    <Section refer={refer}>
      <div className="intro">
        <div className="intro__info">
          <h2 className="intro__info__title">
            Hi, I am <span>Andrii Chekanovskyi</span>
          </h2>
          <p className="intro__info__subtitle"> Software Engineer</p>
          <div className="intro__info__btns">
            <a href="./Andrii_Chekanovskyi_CV.pdf" download="Andrii_Chekanovskyi_CV">
              <Button className="intro__info__btns__btn" variant="primary">
                Download CV
              </Button>
            </a>
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
