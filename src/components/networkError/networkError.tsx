import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '..';

import './networkError.scss';

export const NetworkError = () => {
  const navigate = useNavigate()

  return (
    <div className="networkError">
      <h2>404</h2>
      <p>Вы заблудились. Но не беспокойтесь: вот правильный путь</p>
      <Button className="button__network" click={() => navigate('/')}>
        <img src="/assets/network/chevron-down.svg" alt="" /> Вернуться назад
      </Button>
    </div>
  );
};
