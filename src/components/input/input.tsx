import React, { FC } from 'react';

import './input.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  type: string;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder, type }) => {
  return (
    <div className="input">
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
