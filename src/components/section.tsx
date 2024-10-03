import { FC, ReactNode, RefObject } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IProps {
  title?: string;
  children: ReactNode;
  className?: string;
  refer?: RefObject<HTMLDivElement>;
}

const Section: FC<IProps> = ({ children, title, refer, className = '' }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const introVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      ref={ref}
      variants={introVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`section container ${className}`}
    >
      {title ? <h1 className="section__title">{title}</h1> : null}
      {children}
    </motion.section>
  );
};

export default Section;
