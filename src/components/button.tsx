import React, { ReactNode } from 'react';

interface IProps {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  children: ReactNode;
  className?: string;
}

const Button: React.FC<IProps> = ({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
}) => {
  return <button className={`${className} button btn-${variant}`}>{children}</button>;
};

export default Button;
