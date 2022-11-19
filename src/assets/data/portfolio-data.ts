import todoImg from "../images/portfolio/todo.png";
import schedulerImg from "../images/portfolio/scheduler.png";
import tourImg from "../images/portfolio/tour-manag.png";
import quizImg from "../images/portfolio/quiz-app.png";

export interface IPortfolioItem {
    title: string;
    description: string;
    img: any;
    githubLink: string;
    hostingLink?: string;
}

const portfolioItems: IPortfolioItem[] = [
    {
        title: 'Quiz app',
        description:
            'With this app you can create account, then create some quiz and make it public or keep it private. Visitor can pass quiz without creating an account. The project is still in development. Technological stack: React, Redux, Express, Postgres, TypeORM, OOP approach, DI, JWT-auth.',
        img: quizImg,
        githubLink: 'https://github.com/AndriyCh1/quiz-app/',
    },
    {
        title: 'ToDo',
        description: 'Just simple task manager. Technological stack: React, Nest, MaterialUI',
        img: todoImg,
        githubLink: 'https://github.com/AndriyCh1/Todo',
        hostingLink: 'https://todo-app311.herokuapp.com/',
    },
    {
        title: 'Task Scheduler',
        description:
            'Improved task manager with ability to assign some date. Technological stack: React, Nest, Postgres, MaterialUI',
        img: schedulerImg,
        githubLink: 'https://github.com/AndriyCh1/Scheduler',
        hostingLink: 'https://scheduler-app31.herokuapp.com/',
    },
    {
        title: 'Tour management',
        description:
            'The app is created for managing tours, its categories and guides. Technological stack: React, Express, MySql',
        img: tourImg,
        githubLink: 'https://github.com/AndriyCh1/travel-agency',
        hostingLink: 'https://agency-web31.herokuapp.com/',
    },
];

const getAll = () => portfolioItems;

export default {
    getAll
}