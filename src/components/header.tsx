import { useRef, useState } from 'react';

import { MdDownload } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaCopy, FaPhone } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const Header = () => {
  const navigationElement = useRef<HTMLDivElement>(null);
  const [isScrolled, setScrolled] = useState(false);
  const [copiedLinks, setCopiedLinks] = useState({
    linkedin: false,
    github: false,
    email: false,
    phone: false,
  });

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 40) setScrolled(true);
    else setScrolled(false);
  });

  const handleCopy = (name: string) => () => {
    setCopiedLinks((links) => ({ ...links, [name]: true }));
    setTimeout((links) => setCopiedLinks({ ...links, [name]: false }), 2000);
  };

  return (
    <header className={`header  ${isScrolled ? 'shrink' : ''}`}>
      <div className="container">
        <nav className="navigation" ref={navigationElement}>
          <div className="navigation__name">Andrii Chekanovskyi</div>
          <div className={`navigation__links ${isScrolled ? 'shrink' : ''}`}>
            <a
              href="https://www.linkedin.com/in/andrii-chekanovskyi-28413a1a1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span className="link_label">{copiedLinks.linkedin ? 'Copied!' : 'LinkedIn'}</span>
              <CopyToClipboard
                text={'https://www.linkedin.com/in/andrii-chekanovskyi-28413a1a1/'}
                onCopy={handleCopy('linkedin')}
              >
                <FaCopy className="link_copy hidden" onClick={(e) => e.preventDefault()} />
              </CopyToClipboard>
            </a>
            <a href="mailto:achekanovskiy@gmail.com" target="_blank" rel="noreferrer">
              <SiGmail />
              <span className="link_label">{copiedLinks.email ? 'Copied!' : 'Email'}</span>
              <CopyToClipboard text={'achekanovskiy@gmail.com'} onCopy={handleCopy('email')}>
                <FaCopy className="link_copy hidden" onClick={(e) => e.preventDefault()} />
              </CopyToClipboard>
            </a>
            <a href="https://github.com/AndriyCh1" target="_blank" rel="noreferrer">
              <FaGithub />
              <span className="link_label">{copiedLinks.github ? 'Copied!' : 'GitHub'}</span>
              <CopyToClipboard text={'https://github.com/AndriyCh1'} onCopy={handleCopy('github')}>
                <FaCopy className="link_copy hidden" onClick={(e) => e.preventDefault()} />
              </CopyToClipboard>
            </a>
            <a href="tel:17197993745" target="_blank" rel="noreferrer">
              <FaPhone />
              <span className="link_label">{copiedLinks.github ? 'Copied!' : 'Phone'}</span>
              <CopyToClipboard text={'17197993745'} onCopy={handleCopy('phone')}>
                <FaCopy className="link_copy hidden" onClick={(e) => e.preventDefault()} />
              </CopyToClipboard>
            </a>
            <a
              href="./Andrii_Chekanovskyi_CV.pdf"
              download="Andrii_Chekanovskyi_CV"
              target="_blank"
            >
              <MdDownload />
              CV
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
