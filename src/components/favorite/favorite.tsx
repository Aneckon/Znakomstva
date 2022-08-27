import React from 'react';

import { Card } from '..';

import './favorite.scss';

export const Favorite = () => {
  return (
    <div className="favorite">
      <div className="container">
        <h2>Улюблені</h2>
        <div className="favorite__wrraper">
          <div className="favorite__item">
            <Card />
            <div className="favorite__item-delete">
              <img src="/assets/favorite/delete-button.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
