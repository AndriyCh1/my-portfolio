import tourImg from '../images/portfolio/tour-manag.png';
import quizImg from '../images/portfolio/quiz-app.png';
import translateMeApp from '../images/portfolio/translate-me.png';
import mazeImg from '../images/portfolio/maze.png';
import growUpImg from '../images/portfolio/grow-up.png';
import xClone from '../images/portfolio/x-clone.png';
import lmsImg from '../images/portfolio/lms.png';

export interface IPortfolioItem {
  title: string;
  description: string;
  img: any;
  githubLink: string;
  hostingLink?: string;
}

const portfolioItems: IPortfolioItem[] = [
  {
    title: 'LMS',
    description: 'A platform for creating and managing online courses.',
    img: lmsImg,
    githubLink: 'https://github.com/AndriyCh1/lms',
    hostingLink: 'https://lms-rho-red.vercel.app/',
  },
  {
    title: 'X-clone',
    description: 'Platform for sharing thoughts and current events.',
    img: xClone,
    githubLink: 'https://github.com/AndriyCh1/twitter-clone',
  },
  {
    title: 'Quiz app',
    description:
      'A platform to create quizzes, manage privacy settings, and allow visitors to take quizzes without an account ',
    img: quizImg,
    githubLink: 'https://github.com/AndriyCh1/quiz-app/',
  },
  {
    title: 'GrowUp',
    description: 'HR platform for matching job opportunities with internal talents. ',
    img: growUpImg,
    githubLink: 'https://github.com/AndriyCh1/bsa-winter-2022-growup',
  },
  {
    title: 'Translate me app',
    description:
      'The app allows you to practice English or other languages by translating various topics and comparing them with professionally translated versions',
    img: translateMeApp,
    githubLink: 'https://github.com/AndriyCh1/translate-me',
  },
  {
    title: 'Maze',
    description:
      'Two-player in-browser game. Players are placed into the same maze and they should find the way out.',
    img: mazeImg,
    githubLink: 'https://github.com/AndriyCh1/maze',
  },
];

const getAll = () => portfolioItems;

export default {
  getAll,
};
