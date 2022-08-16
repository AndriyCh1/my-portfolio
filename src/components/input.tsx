import React, { useRef } from 'react';

interface IProps {
  name: string;
  label?: string;
  value?: string;
  onChange?: (e: HTMLInputElement | null) => void;
  className?: string;
  type?: 'email' | 'input' | 'password';
  required?: boolean;
}

const Input: React.FC<IProps> = ({
  name,
  label,
  value = '',
  type = 'input',
  required = false,
  onChange,
  className = '',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };

  return (
    <div className="input-wrapper">
      <input
        ref={inputRef}
        name={name}
        type={type}
        value={value}
        onChange={handleOnChange}
        className={`input ${className}`}
        required={required}
      ></input>
      <label className="label">{label && label}</label>
    </div>
  );
};

export default Input;
