import HTMLIcon from '../images/skills/html.png';
import CSSIcon from '../images/skills/css.png';
import JSIcon from '../images/skills/javascript.png';
import ReactIcon from '../images/skills/react.png';
import ReduxIcon from '../images/skills/redux.png';
import SASSIcon from '../images/skills/sass.png';
import BootstrapIcon from '../images/skills/bootstrap.png';
import NodeIcon from '../images/skills/node-js.png';
import ExpressIcon from '../images/skills/express.png';
import TypescriptIcon from '../images/skills/typescript.png';
import PostgreSQLIcon from '../images/skills/postgres.png';
import MongoDBIcon from '../images/skills/mongodb.png';
import TypeORMIcon from '../images/skills/typeorm.png';
import NextJSIcon from '../images/skills/nextjs.jpg';
import TanStackIcon from '../images/skills/tanstack.png';
import TailwindCSSIcon from '../images/skills/tailwindcss.png';
import StyledComponentsIcon from '../images/skills/styled-components.png';
import GitIcon from '../images/skills/git.png';
import GithubIcon from '../images/skills/github.png';
import DockerIcon from '../images/skills/docker.png';
import PrismaORM from '../images/skills/prisma.png';
import JestIcon from '../images/skills/jest.png';
import NestJsIcon from '../images/skills/nest.png';
import RedisIcon from '../images/skills/redis.png';
import AWSIcon from '../images/skills/aws.png';
import SQLIcon from '../images/skills/sql.png';

export interface ISkill {
  name: string;
  icon: string;
}

export interface ICategory {
  category: string;
  skills: ISkill[];
}

const skills: ICategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: HTMLIcon },
      { name: 'CSS3', icon: CSSIcon },
      { name: 'Javascript', icon: JSIcon },
      { name: 'Typescript', icon: TypescriptIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'Next.js', icon: NextJSIcon },
      { name: 'Redux', icon: ReduxIcon },
      { name: 'TanStack Query', icon: TanStackIcon },
      { name: 'TailwindCSS', icon: TailwindCSSIcon },
      { name: 'Styled Components', icon: StyledComponentsIcon },
      { name: 'SASS', icon: SASSIcon },
      { name: 'Bootstrap', icon: BootstrapIcon },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: NodeIcon },
      { name: 'Express.js', icon: ExpressIcon },
      { name: 'NestJS', icon: NestJsIcon },
      { name: 'PostgresSQL', icon: PostgreSQLIcon },
      { name: 'MongoDb', icon: MongoDBIcon },
      { name: 'SQL', icon: SQLIcon },
      { name: 'TypeORM', icon: TypeORMIcon },
      { name: 'Prisma ORM', icon: PrismaORM },
      { name: 'Redis', icon: RedisIcon },
      { name: 'AWS', icon: AWSIcon },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: GitIcon },
      { name: 'GitHub', icon: GithubIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'Jest', icon: JestIcon },
    ],
  },
];

const getAll = () => skills;

export default {
  getAll,
};
