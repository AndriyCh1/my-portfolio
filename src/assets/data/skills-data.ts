import HTMLIcon from "../images/skills/html.png";
import CSSIcon from "../images/skills/css.png";
import JSIcon from "../images/skills/javascript.png";
import ReactIcon from "../images/skills/react.png";
import ReduxIcon from "../images/skills/redux.png";
import SASSIcon from "../images/skills/sass.png";
import BootstrapIcon from "../images/skills/bootstrap.png";
import NodeIcon from "../images/skills/node-js.png";
import ExpressIcon from "../images/skills/express.png";
import TypescriptIcon from "../images/skills/typescript.png";
import PostgreSQLIcon from "../images/skills/postgres.png";
import MongoDBIcon from "../images/skills/mongodb.png";
import TypeORMIcon from "../images/skills/typeorm.png";

export interface ISkill {
    name: string;
    icon: any;
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
            { name: 'React', icon: ReactIcon },
            { name: 'Redux', icon: ReduxIcon },
            { name: 'SASS', icon: SASSIcon },
            { name: 'Bootstrap', icon: BootstrapIcon },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', icon: NodeIcon },
            { name: 'Express.js', icon: ExpressIcon },
            { name: 'Typescript', icon: TypescriptIcon },
            { name: 'PostgresSQL', icon: PostgreSQLIcon },
            { name: 'MongoDb', icon: MongoDBIcon },
            { name: 'TypeORM', icon: TypeORMIcon },
        ],
    },
];

const getAll = () => skills;

export default {
    getAll
}