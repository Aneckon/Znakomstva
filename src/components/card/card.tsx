import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '..';

import './card.scss';

interface CardProps {
  name?: string;
  age?: number;
  img?: string;
}

export const Card: FC<CardProps> = ({ name, age, img }) => {
  const navigate = useNavigate();

  const onNavigateUser = (name: string) => {
    navigate(`/profile/${name}`);
  };

  return (
    <div className="card" onClick={() => onNavigateUser('віктор')}>
      <img src={img?.length ? img : '/assets/card/photo.png'} alt="" />
      <div className="card__content">
        <p>
          {name?.length ? name : 'Віктор'} <span>{name?.length ? age : 22}</span>
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
