import React, { useState } from 'react';

import { Input, Button } from '..';

import './register.scss';

export const Register = () => {
  const [passwordShow, setPasswordShow] = useState(true);

  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [gender, setGender] = useState('boy');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(name, data, gender, email, password);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="register__content">
          <div className="register__content-title">
            <h2>Создай новый аккаунт</h2>
            <p>Присоединяйся к сообществу из 518 млн человек!</p>
          </div>
          <form onSubmit={onClickSubmit} className="register__content-from">
            <div className="register__content-from__input">
              <Input
                className="input input__auth"
                placeholder="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type={'text'}>
                <img src="/assets/auth/user.svg" alt="" />
              </Input>
            </div>
            <div className="register__content-from__input">
              <p>Дата народження</p>
              <Input
                className="input input__profile"
                type="date"
                placeholder="Місяц"
                value={data}
                onChange={(e) => setData(e.target.value)}>
                <img src="/assets/auth/date.svg" alt="" />
              </Input>
            </div>
            <div className="register__content-checkbox">
              <label htmlFor="radioBoy">
                <input
                  className="input input__checkbox"
                  value={'boy'}
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  placeholder="boy"
                  id={'radioBoy'}
                  checked={gender === 'boy'}
                />
                <span className={gender === 'boy' ? 'active' : ''}></span>
              </label>
              <label htmlFor="radioWoman">
                <input
                  className="input input__checkbox"
                  value="woman"
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  placeholder="woman"
                  id={'radioWoman'}
                  checked={gender === 'woman'}
                />
                <span className={gender === 'boy' ? '' : 'active'}></span>
              </label>
            </div>
            <div className="register__content-from__input">
              <Input
                className="input input__auth"
                placeholder="Введіть електронну пошту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={'text'}>
                <img src="/assets/auth/message.svg" alt="" />
              </Input>
            </div>
            <div className="register__content-from__input">
              <Input
                className="input input__auth"
                placeholder="Введіть пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordShow ? 'password' : 'text'}>
                <img src="/assets/auth/password.svg" alt="" />
                <div
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="register__content-from__show">
                  <img
                    src={passwordShow ? '/assets/auth/eye.svg' : '/assets/auth/eye-remove.svg'}
                    alt=""
                  />
                </div>
              </Input>
            </div>
            <Button className="button__auth">Створити акаунт</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
