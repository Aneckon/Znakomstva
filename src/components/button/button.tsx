import React, { FC } from 'react';

import './button.scss';

interface ButtonProps {
  className: string;
  children: string | any;
}

export const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button onClick={() => console.log('click')} className={className}>
      {children}
    </button>
  );
};
