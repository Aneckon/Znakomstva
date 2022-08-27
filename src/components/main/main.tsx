import React from 'react';

import { TopDating } from '..';

import './main.scss';

export const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <TopDating title="Топ для знакомств" />
        <TopDating title="Жінки" />
        <TopDating title="Чоловіки" />
      </div>
    </div>
  );
};
