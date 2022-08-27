import React from 'react';

import { Button } from '..';

import './networkError.scss';

export const NetworkError = () => {
  return (
    <div className="networkError">
      <h2>404</h2>
      <p>Вы заблудились. Но не беспокойтесь: вот правильный путь</p>
      <Button className="button__network">
        <img src="/assets/network/chevron-down.svg" alt="" /> Вернуться назад
      </Button>
    </div>
  );
};
