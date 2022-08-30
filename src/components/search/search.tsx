import React from 'react';

import { Card, Input } from '..';

import './search.scss';

export const Search = () => {
  return (
    <div className="search">
      <div className="container">
        <h2>Пошук</h2>
        <div className="search__wrapper">
          <div className="search__input">
            <Input
              type="text"
              className="input"
              value=""
              placeholder="Пошук"
              onChange={(e) => console.log()}
            />
          </div>
          <div className="search__content">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
