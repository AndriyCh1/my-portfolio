import React, { ReactNode } from 'react';

interface IProps {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
}) => {
  return (
    <button className={`${className} button btn-${variant}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
