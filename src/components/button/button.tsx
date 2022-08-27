import React, { FC } from 'react';

import './button.scss';

interface ButtonProps {
  className: string;
  children: string | any;
  click?: () => void
}

export const Button: FC<ButtonProps> = ({ className, children, click }) => {
  return (
    <button onClick={click} className={className}>
      {children}
    </button>
  );
};
