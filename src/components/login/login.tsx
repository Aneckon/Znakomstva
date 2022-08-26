import React from 'react';

import { Input, Button } from '..';

import './login.scss';

export const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="login__content">
          <div className="login__content-title">
            <h1>Знакомства без преград</h1>
            <p>
              Для современного мира сплочённость команды профессионалов однозначно фиксирует
              необходимость системы обучения кадров, соответствующей насущным потребностям.
            </p>
          </div>
          <form className="login__content-from">
            <div className="login__content-from__input">
              <Input
                className="input input__auth"
                placeholder="Введите электронную почту"
                value={''}
                onChange={(e) => e.target.value}
                type={''}
              />
            </div>
            <div className="login__content-from__input">
              <Input
                className="input input__auth"
                placeholder="Введите пароль"
                value={''}
                onChange={(e) => e.target.value}
                type={''}
              />
              <div className="login__content-from__show"></div>
            </div>
            <Button className="button__auth">Войти</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
