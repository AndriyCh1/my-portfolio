import todoImg from "../images/portfolio/todo.png";
import schedulerImg from "../images/portfolio/scheduler.png";
import tourImg from "../images/portfolio/tour-manag.png";

export interface IPortfolioItem {
    title: string;
    description: string;
    img: any;
    githubLink: string;
    hostingLink?: string;
}

const portfolioItems: IPortfolioItem[] = [
    {
        title: 'ToDo',
        description: 'psum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod',
        img: todoImg,
        githubLink: 'https://github.com/AndriyCh1/Todo',
        hostingLink: 'https://todo-app311.herokuapp.com/',
    },
    {
        title: 'Task Scheduler',
        description:
            'psum dolor sit amet, consectetur adipiscing elit,consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod',
        img: schedulerImg,
        githubLink: 'https://github.com/AndriyCh1/Scheduler',
        hostingLink: 'https://scheduler-app31.herokuapp.com/',
    },
    {
        title: 'Tour management',
        description:
            'psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod',
        img: tourImg,
        githubLink: 'https://github.com/AndriyCh1/travel-agency',
        hostingLink: 'https://agency-web31.herokuapp.com/',
    }
];

const getAll = () => portfolioItems;

export default {
    getAll
}