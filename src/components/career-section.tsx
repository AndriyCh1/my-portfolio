import React, { Fragment, useEffect, useState } from 'react';

import Section from './section';

import { BsFillBriefcaseFill as CareerIcon } from 'react-icons/bs';
import { MdSchool as EducationIcon } from 'react-icons/md';
import { FaSlackHash as ActivityIcon } from 'react-icons/fa';
import timeline, {
  IActivity,
  ICareer,
  IEducation,
  IPathInfoByDate,
} from '../assets/data/timeline-data';

import { formatDate } from '../utils/date';

const CareerSection = () => {
  const [pathData, setPathData] = useState<IPathInfoByDate[]>([]);

  useEffect(() => {
    const groupedData = timeline.groupByDate(timeline.getAll());
    const sortedData = timeline.sortByDate(groupedData);
    setPathData(sortedData);
  }, []);

  return (
    <Section title={'Career'} className="career">
      {/*<div className="career-filters">filters</div>*/}
      <div className="career-path">
        <div className="career-path__wrapper">
          {pathData.map((pathItem, index) => (
            <Fragment key={index}>
              {pathItem.career && <CareerItem career={{ ...pathItem.career }} />}
              {pathItem.education && <EducationItem education={{ ...pathItem.education }} />}
              {pathItem.activity && <ActivityItem activity={{ ...pathItem.activity }} />}
            </Fragment>
          ))}
        </div>
        <span className="career-path__central-line"></span>
        <span className="career-path__mute"></span>
      </div>
    </Section>
  );
};

interface IPathItemProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  startDate: Date;
  endDate?: Date;
}

const PathItemWrapper: React.FC<IPathItemProps> = ({ children, icon, startDate, endDate }) => {

  const date =
    endDate && !(startDate < endDate || startDate > endDate)
      ? `${formatDate(startDate)}`
      : `${formatDate(startDate)} - ${endDate ? formatDate(endDate) : 'present'}`;
  
  return (
    <div className="career-path__item">
      <div className="career-path__item__content">{children}</div>
      <div className="career-path__item__icon">{icon}</div>
      <div className="career-path__item__date">{`${date}`}</div>
    </div>
  );
};

const CareerItem: React.FC<{ career: ICareer }> = ({ career }) => {
  return (
    <PathItemWrapper startDate={career.startDate} endDate={career.endDate} icon={<CareerIcon />}>
      <p className="career-path__item__content__title">{career.role}</p>
      <p>{career.description}</p>
    </PathItemWrapper>
  );
};

const EducationItem: React.FC<{ education: IEducation }> = ({ education }) => {
  return (
    <PathItemWrapper
      startDate={education.startDate}
      endDate={education.endDate}
      icon={<EducationIcon />}
    >
      <p className="career-path__item__content__title">{education.university}</p>
      <p>
        <span>Speciality: </span>
        {education.title}
      </p>
      <p>
        <span>Degree: </span>
        {education.degree}
      </p>
    </PathItemWrapper>
  );
};

const ActivityItem: React.FC<{ activity: IActivity }> = ({ activity }) => {
  return (
    <PathItemWrapper
      startDate={activity.startDate}
      endDate={activity.endDate}
      icon={<ActivityIcon />}
    >
      <p className="career-path__item__content__title">{activity.title}</p>
      <p> {activity.description} </p>
    </PathItemWrapper>
  );
};

export default CareerSection;
