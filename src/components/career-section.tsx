import React, {Fragment, RefObject, useCallback, useEffect, useState} from 'react';

import Section from './section';
import CheckBox from './check-box';

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

enum FILTERS {
  education = 'EDUCATION',
  career = 'CAREER',
  activity = 'ACTIVITY',
}

interface IProps {
  refer?: RefObject<HTMLDivElement>;
}

const CareerSection: React.FC<IProps> = ({refer}) => {
  const initFilter = {
    education: true,
    activity: false,
    career: true,
  };

  // TODO: solve problem with useEffect and that instead of this
  const sortedData = timeline.sortByDate(timeline.groupByDate(timeline.getAll()));
  const [filter, setFilter] = useState(initFilter);
  const [pathData, setPathData] = useState<IPathInfoByDate[]>([]);

  const changeFilter = (type: string, checked: boolean) => {
    switch (type) {
      case FILTERS.education:
        setFilter({ ...filter, education: checked });
        break;
      case FILTERS.career:
        setFilter({ ...filter, career: checked });
        break;
      case FILTERS.activity:
        setFilter({ ...filter, activity: checked });
        break;
      default:
        break;
    }
  };

  const updateData = useCallback((): IPathInfoByDate[] => {
    let tempData = sortedData;

    if (!filter.education && !filter.career && !filter.activity) {
      return [];
    }

    if (!filter.education) {
      tempData = tempData.map((data) => ({ ...data, education: undefined }));
    }

    if (!filter.career) {
      tempData = tempData.map((data) => ({ ...data, career: undefined }));
    }

    if (!filter.activity) {
      tempData = tempData.map((data) => ({ ...data, activity: undefined }));
    }

    return tempData;
  }, [filter, setPathData]);

  // TODO: ref: [solve problem with useEffect and that instead of this]
  // useEffect(() => {
  //   const groupedData = timeline.groupByDate(timeline.getAll());
  //   const sortedData = timeline.sortByDate(groupedData);
  //   setPathData(sortedData);
  // }, []);

  useEffect(() => {
    setPathData(updateData());
  }, [updateData]);

  return (
    <Section refer={refer} title={'Career'} className="career">
      <div className="career-filters">
        <CheckBox
          checked={filter.education}
          label="Education"
          onChange={(input) => changeFilter(FILTERS.education, Boolean(input?.checked))}
        />
        <CheckBox
          checked={filter.career}
          label="Career"
          onChange={(input) => changeFilter(FILTERS.career, Boolean(input?.checked))}
        />
        <CheckBox
          checked={filter.activity}
          label="Other activities"
          onChange={(input) => changeFilter(FILTERS.activity, Boolean(input?.checked))}
        />
      </div>
      <div className="career-path">
        <div className="career-path__wrapper">
          {pathData.map((pathItem, index) => (
            <Fragment key={index}>
              {pathItem.career && <CareerItem career={{ ...pathItem.career }} />}
              {pathItem.education && <EducationItem education={{ ...pathItem.education }} />}
              {pathItem.activity && <ActivityItem activity={{ ...pathItem.activity }} />}
            </Fragment>
          ))}
          {pathData.length ? (
            <>
              <span className="career-path__central-line"></span>
              <span className="career-path__mute"></span>
            </>
          ) : (
            <div className="career-path__empty">No data, make sure, that at least one filter is chosen =)</div>
          )}
        </div>
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
      : `${formatDate(startDate)} - ${endDate ? formatDate(endDate) : 'still going'}`;

  return (
    <div className="career-path__item">
      <div className="career-path__item__wrapper">
        <div className="career-path__item__icon start-place"></div>
        <div className="career-path__item__content">{children}</div>
        <div className="career-path__item__icon center-place"></div>
        <div className="career-path__item__icon__wrapper">{icon}</div>
        <div className="career-path__item__date">{date}</div>
      </div>
    </div>
  );
};

const CareerItem: React.FC<{ career: ICareer }> = ({ career }) => {
  return (
    <PathItemWrapper startDate={career.startDate} endDate={career.endDate} icon={<CareerIcon />}>
      <p className="career-path__item__content__title">{career.role}</p>
      <p dangerouslySetInnerHTML={{ __html: career?.description || "" }} />
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
      <p dangerouslySetInnerHTML={{ __html: activity?.description || "" }} />
    </PathItemWrapper>
  );
};

export default CareerSection;
