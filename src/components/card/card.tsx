import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '..';

import './card.scss';

export const Card = () => {
  const navigate = useNavigate();

  const onNavigateUser = (name: string) => {
    navigate(`/user/${name}`);
  };

  return (
    <div className="card" onClick={() => onNavigateUser('віктор')}>
      <img src="/assets/card/photo.png" alt="" />
      <div className="card__content">
        <p>
          Виктор <span>22</span>
        </p>
        <div className="card__content-location">
          <img src="/assets/card/ukraine.svg" alt="" />
          <p>Україна</p>
        </div>
        <Button className="button">
          Привітати
          <img src="/assets/card/default.svg" alt="" />
        </Button>
      </div>
    </div>
  );
};
