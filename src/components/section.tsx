import React, {FC, ReactNode, RefObject} from 'react';

interface IProps {
  title?: string;
  children: ReactNode;
  className?: string;
  refer?: RefObject<HTMLDivElement>;
}

const Section: FC<IProps> = ({ children, title, refer, className = '' }) => {
  return (
    <section ref={refer} className={`section container ${className}`}>
      {title ? <h1 className="section__title">{title}</h1> : null}
      {children}
    </section>
  );
};

export default Section;
