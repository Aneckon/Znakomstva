import React, { FC } from 'react';

import './input.scss';

interface InputProps {
  placeholder: string;
  value?: string;
  onChange: (e: any) => void;
  type: string;
  className: string;
  children?: any;
  onKeyEnter?: any;
}

export const Input: FC<InputProps> = ({
  children,
  className,
  value,
  onChange,
  placeholder,
  type,
  onKeyEnter
}) => {
  return (
    <div className={className}>
      {children}
      <input onKeyDown={onKeyEnter} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
