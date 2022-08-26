import React from 'react';

import { Input, Button } from '..';

import './profileForm.scss';

export const ProfileForm = () => {
  return (
    <form className="profile__content-form">
      <div className="profile__content-form__item">
        <p>Основна інформація</p>
        <div className="profile__content-form__items">
          <p>Ім'я</p>
          <Input type="text" placeholder="Ваше имя" value="" onChange={() => console.log()} />
        </div>
        <div className="profile__content-form__items">
          <p>Дата народження</p>
          <Input type="date" placeholder="Місяц" value="" onChange={() => console.log()} />
        </div>
        <div className="profile__content-form__items">
          <p>Стать</p>
          <div className="profile__content-form__checkbox">
            <Input
              type="checkbox"
              placeholder="Мета знайомства"
              value=""
              onChange={() => console.log()}
            />
            <Input
              type="checkbox"
              placeholder="Мета знайомства"
              value=""
              onChange={() => console.log()}
            />
          </div>
        </div>
      </div>
      <div className="profile__content-form__item">
        <p>Особиста інформація</p>
        <div className="profile__content-form__items">
          <p>Зріст</p>
          <Input type="text" placeholder="Зріст" value="" onChange={() => console.log()} />
        </div>
        <div className="profile__content-form__items">
          <p>Вага</p>
          <Input type="text" placeholder="Вага" value="" onChange={() => console.log()} />
        </div>
        <div className="profile__content-form__items">
          <p>Колір волосся</p>
          <Input type="text" placeholder="Колір волосся" value="" onChange={() => console.log()} />
        </div>
        <div className="profile__content-form__items">
          <p>Колір очей</p>
          <Input type="text" placeholder="Колір очей" value="" onChange={() => console.log()} />
        </div>
        <div className="profile__content-form__items">
          <p>Мета знайомства</p>
          <Input
            type="text"
            placeholder="Мета знайомства"
            value=""
            onChange={() => console.log()}
          />
        </div>
        <div className="profile__content-form__items">
          <p>Про себе</p>
          <Input type="text" placeholder="Про себе" value="" onChange={() => console.log()} />
        </div>
      </div>
      <div className="profile__content-form__item">
        <p>Аккаунт</p>
        <div className="profile__content-form__items">
          <p>E-mail</p>
          <Input type="text" placeholder="Введите e-mail" value="" onChange={() => console.log()} />
        </div>
        <div className="profile__content-form__items">
          <p>Пароль</p>
          <Input type="text" placeholder="Введите пароль" value="" onChange={() => console.log()} />
        </div>
      </div>
      <Button className="button">Зберегти</Button>
    </form>
  );
};
