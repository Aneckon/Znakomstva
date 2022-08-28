import React, { useState } from 'react';

import { Input, Button } from '..';

import './profileForm.scss';

export const ProfileForm = () => {
  const [gender, setGender] = useState('')
  return (
    <form className="profile__content-form">
      <div className="profile__content-form__item">
        <p>Основна інформація</p>
        <div className="profile__content-form__items">
          <p>Ім'я</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Ваше имя"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Дата народження</p>
          <Input
            className="input input__profile"
            type="date"
            placeholder="Місяц"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Стать</p>
          <div className="profile__content-form__checkbox">
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
          </div>
        </div>
      </div>
      <div className="profile__content-form__item">
        <p>Особиста інформація</p>
        <div className="profile__content-form__items">
          <p>Зріст</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Зріст"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Вага</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Вага"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Колір волосся</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Колір волосся"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Колір очей</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Колір очей"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Мета знайомства</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Мета знайомства"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Про себе</p>
          <Input
            className="input input__profile"
            type="text"
            placeholder="Про себе"
            value=""
            onChange={() => console.log()}
          />
        </div>
      </div>
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
      </div>
      <Button className="button">Зберегти</Button>
    </form>
  );
};
