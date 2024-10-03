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

const paths: IPath[] = [
  {
    career: [
      {
        startDate: new Date('2021-07-01'),
        endDate: new Date('2022-08-01'),
        role: 'Junior Full Stack Developer',
        company: 'Your It Soft',
        description:
          'Project: A project designed to help farms and households track energy usage, generate reports, and facilitate monthly settlements' +
          '<br/>' +
          '<br/> • Designed and implemented UI and APIs for managing tariffs and tariff groups, allowing users to manage tariff data;' +
          '<br/> • Developed functionality to track client and contractor actions, ensuring a detailed history of changes;' +
          '<br/> • Assisted in developing the handbooks module to capture data on new green energy consumers and manage' +
          'customer service center information.' +
          '<br/><span style="display: block; margin-top:5px"><b>Tech stack:</b> React.js, Typescript, React Hook Form, Material-UI, Nest.js</span>',
      },
      {
        startDate: new Date('2023-09-01'),
        endDate: new Date('2023-11-01'),
        role: 'Full Stack Developer',
        company: 'CGS-team ',
        description:
          'Project: A platform that enables multifamily operators to work better with real estate agents and locators.' +
          '<br/>' +
          '<br/> • Contributed to lead details and property management modules along with filtering, and searching;' +
          '<br/> • Implemented bug fixes and minor feature enhancements, improving system stability and user experience.' +
          '<br/><span style="display: block; margin-top:5px"><b>Tech stack:</b> TypeScript, Next.js, React, Express.js, SWR, PostgreSQL, TypeORM</span>',
      },
      {
        startDate: new Date('2023-11-01'),
        endDate: new Date('2024-09-01'),
        role: 'Full Stack Developer',
        company: 'Handelnine Global',
        description:
          'Project: ERP system.' +
          '<br/>' +
          '<br/> • Developed an admin panel for managing users and setting up their permissions;' +
          '<br/> • Contributed to order and warehouse management modules using React and Nest.js;' +
          '<br/> • Automated settlements for shipment providers using API integrations, FTP connection and file parsing logic,' +
          'coupled with AWS S3 integration, reducing processing time;' +
          '<br/> • Improved operational responsiveness by integrating Slack API for downtime notifications;' +
          '<br/> • Implemented role-based access control for frontend and backend to manage user permissions.' +
          '<br/><span style="display: block; margin-top:5px"><b>Tech stack:</b> TypeScript, React, Nest.js, Redux, MySQL, MongoDB, Prisma, Mongoose, AWS, Jest, Agile</span>',
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
        endDate: new Date('2023-06-01'),
        title: 'Computer science',
        university: 'Ternopil Ivan Puluj National Technical University, Ukraine',
        degree: "Bachelor's degree",
      },
      {
        startDate: new Date('2023-09-01'),
        endDate: new Date('2025-01-01'),
        title: 'Computer science',
        university: 'Ternopil Ivan Puluj National Technical University, Ukraine',
        degree: "Master's degree",
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
          '<a style="display: block; margin-top:5px" href="https://study.binary-studio.com/certificate/b794584e-3746-4448-a62e-48bbd897c930">Certificate</a>',
      },
      {
        startDate: new Date('2017-11-15'),
        endDate: new Date('2017-11-15'),
        title:
          '2nd place in the second stage of the All-Ukrainian Mathematics Olympiad among students',
      },
      {
        startDate: new Date('2020-12-24'),
        endDate: new Date('2020-12-24'),
        title:
          '3rd place in the nomination "Programming" in the open information technology competition "Byte" among students of Ternopil ',
      },
      {
        startDate: new Date('2018-11-20'),
        endDate: new Date('2018-11-20'),
        title:
          '2nd place in the second stage of the All-Ukrainian Mathematics Olympiad among students',
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
