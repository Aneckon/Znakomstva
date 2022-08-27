import React, { useState } from 'react';

import { Input, Button } from '..';

import './login.scss';

export const Login = () => {
  const [passwordShow, setPasswordShow] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email, password);
  };

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
          <form onSubmit={onClickSubmit} className="login__content-from">
            <div className="login__content-from__input">
              <Input
                className="input input__auth"
                placeholder="Введіть електронну пошту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={'text'}>
                <img src="/assets/auth/message.svg" alt="" />
              </Input>
            </div>
            <div className="login__content-from__input">
              <Input
                className="input input__auth"
                placeholder="Введіть пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordShow ? 'password' : 'text'}>
                <img src="/assets/auth/password.svg" alt="" />
                <div
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="login__content-from__show">
                  <img
                    src={passwordShow ? '/assets/auth/eye.svg' : '/assets/auth/eye-remove.svg'}
                    alt=""
                  />
                </div>
              </Input>
            </div>
            <Button className="button__auth">Войти</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
