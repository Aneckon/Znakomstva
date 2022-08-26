import React, { FC } from 'react';

import './input.scss';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
  type: string;
  className: string;
}

export const Input: FC<InputProps> = ({ className, value, onChange, placeholder, type }) => {
  return (
    <div className={className}>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
