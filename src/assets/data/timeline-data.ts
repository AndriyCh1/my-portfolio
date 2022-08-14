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
        company: 'ТОВ Hardsoft',
        description: '',
        // 'Worked as a Junior Fullstack dev for a few months. Worked with ... The project was about...',
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
        title: 'JS course at Binary Studio Academy',
        description: '',
        // 'Real work on the project "Grow Up". We were developing a system for tracking worker`s growing as a specialist. The main goal of the course is to gain real experience of working at a company. We had meet-ups everyday, demos at Fridays and spent time really effectively',
      },
      {
        startDate: new Date('2017-11-15'),
        endDate: new Date('2017-11-15'),
        title: '3nd place at the second stage of the All-Ukraine Olympiad in Math',
      },
      {
        startDate: new Date('2017-11-15'),
        endDate: new Date('2021-04-05'),
        title: '2nd place at the ?? stage of the All-Ukraine Olympiad in Math',
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
