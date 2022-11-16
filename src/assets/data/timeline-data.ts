interface IInfoBase {
  startDate: Date;
  endDate?: Date;
  description?: string;
}

export interface ICareer extends IInfoBase {
  role: string;
  company: string;
}

export interface IEducation extends IInfoBase {
  title: string;
  university: string;
  degree: string;
}

export interface IActivity extends IInfoBase {
  title: string;
}

export interface IPath {
  career: ICareer[];
  education: IEducation[];
  activity: IActivity[];
}

export interface IPathInfoByDate {
  date: Date;
  career?: ICareer;
  education?: IEducation;
  activity?: IActivity;
}


// TODO: fill paths with more info
const paths: IPath[] = [
  {
    career: [
      {
        startDate: new Date('2021-07-07'),
        endDate: new Date('2021-10-20'),
        role: 'Junior Full Stack Developer',
        company: 'YourItSoft',
        description:
        'The web app helps to account and calculate tariffs, it generates monthly ' +
        'reports payment documents and registers. I worked on creating several forms of' +
        'accounting tariffs, tariff groups, counters and their processing on the frontend and' +
        'backend. Worked with React.js, Node.js (Nest), PostgreSQL, MaterialUI, TypeORM.' +
        '<br><span style="display: block; margin-top:5px"><b>Web stack:</b> React.js, Typescript, React Hook Form, Material-UI, Nest.js</span>',
      },
    ],
    education: [
      {
        startDate: new Date('2017-09-01'),
        endDate: new Date('2021-06-01'),
        title: 'Computer science',
        university: 'Halytskyi college, Ternopil, Ukraine',
        degree: 'Associate of CS',
      },
      {
        startDate: new Date('2021-09-01'),
        title: 'Computer science',
        university: 'Ternopil Ivan Puluj National Technical University, Ukraine',
        degree: 'Bachelor degree',
      },
    ],
    activity: [
      {
        startDate: new Date('2021-11-20'),
        endDate: new Date('2021-04-05'),
        title: 'JS course at Binary Studio Academy ❤️',
        description:
        'Our team worked on the "Grow Up" project. It is a system for tracking workers\' growth as specialists. The main goal of the course is to gain real experience of working at a company.' +
        '<br><span style="display: block; margin-top:5px"><b>Web stack: </b>Redux, React, TypeScript, JS, PostgreSQL, Amazon S3, SCSS, HTML5, Node.js, Express.js, TypeORM, Bootstrap, Chart.js, React Flow, Redux Toolkit.</span>' +
        '<a style="display: block; margin-top:5px" href="https://study.binary-studio.com/certificate/b794584e-3746-4448-a62e-48bbd897c930">Certificate</a>'
      },
      {
        startDate: new Date('2017-11-15'),
        endDate: new Date('2017-11-15'),
        title: '2nd place in the second stage of the All-Ukrainian Mathematics Olympiad among students',
      },
      {
        startDate: new Date('2020-12-24'),
        endDate: new Date('2020-12-24'),
        title: '3rd place in the nomination "Programming" in the open information technology competition "Byte" among students of Ternopil ',
      },
      {
        startDate: new Date('2018-11-20'),
        endDate: new Date('2018-11-20'),
        title: '2nd place in the second stage of the All-Ukrainian Mathematics Olympiad among students',
      },
      {
        startDate: new Date('2022-07-08'),
        endDate: new Date('2022-11-06'),
        title: 'English course at EnglishDom',
        description:
          '1:1 with tutor, 40% of speaking, 20% of listening, 20% of grammar' +
          '<a style="display: block; margin-top:5px" href="https://www.englishdom.com/ua/cn/53041881">Certificate</a>'
      },
    ],
  },
];

const groupByDate = (paths: IPath[]): IPathInfoByDate[] => {
  const grouped: IPathInfoByDate[] = [];

  paths.forEach((path) => {
    path.career.forEach((careerItem) => {
      grouped.push({ date: careerItem.startDate, career: careerItem });
    });

    path.education.forEach((educationItem) => {
      grouped.push({ date: educationItem.startDate, education: educationItem });
    });

    path.activity.forEach((activityItem) => {
      grouped.push({ date: activityItem.startDate, activity: activityItem });
    });
  });

  return grouped;
};

const sortByDate = (paths: IPathInfoByDate[], order?: 'asc' | 'desc') => {
  if (order === undefined) {
    order = 'asc';
  }

  if (order === 'asc') {
    return paths.sort((path1, path2) => (path1.date > path2.date ? 1 : -1));
  }

  return paths.sort((path1, path2) => (path1.date > path2.date ? -1 : 1));
};

const getAll = () => paths;

export default {
  getAll,
  groupByDate,
  sortByDate,
};
