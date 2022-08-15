import React, {useRef} from 'react';
import { BsCheckLg as CheckIcon } from 'react-icons/bs';

interface IProps {
  label: string;
  checked?: boolean;
  onChange?: (e: HTMLInputElement | null) => void;
}

const CheckBox: React.FC<IProps> = ({ label, checked, onChange }) => {
  const inputRef = useRef(null);

  const handleOnChange = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };

  return (
    <label className="checkbox">
      <input type="checkbox" ref={inputRef} onChange={handleOnChange} checked={checked} />
      <span className="checkbox__checkmark">
        <CheckIcon className="checkbox__checkmark__icon" />
      </span>
      {label}
    </label>
  );
};

export default CheckBox;
