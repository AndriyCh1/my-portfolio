import React, {FC, ReactNode} from 'react';

interface IProps {
    children: ReactNode;
}

const Section: FC<IProps> = ({children}) => {
    return (
        <section className="section container">
            {children}
        </section>
    );
};

export default Section;