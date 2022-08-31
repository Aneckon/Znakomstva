import React from 'react';

import { Input, Button } from '..';

import './setting.scss';

export const Setting = () => {
  return (
    <div className="setting">
      <div className="profile__content-form__item">
        <p>Аккаунт</p>
        <div className="profile__content-form__items">
          <p>E-mail</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Введите e-mail"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Пароль</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Введите пароль"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <Button className="button">Зберегти</Button>
      </div>
    </div>
  );
};
