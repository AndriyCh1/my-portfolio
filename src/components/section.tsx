import React, { FC, ReactNode } from 'react';

interface IProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section: FC<IProps> = ({ children, title, className = '' }) => {
  return (
    <section className={`section container ${className}`}>
      {title ? <h1 className="section__title">{title}</h1> : null}
      {children}
    </section>
  );
};

export default Section;
