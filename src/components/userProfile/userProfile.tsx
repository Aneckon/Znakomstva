import React from 'react';

import { ProfilePhoto, Button } from '..';

import './userProfile.scss';

export const UserProfile = () => {
  return (
    <div className="userProfile">
      <div className="container">
        <div className="userProfile__wrraper">
          <ProfilePhoto userName="Віктор" userAre="22" />
          <div className="userProfile__content">
            <div className="userProfile__content-title">
              <h2>
                Віктор <span>22</span>
              </h2>
              <Button className="button">
                Привітати
                <img src="/assets/card/default.svg" alt="" />
              </Button>
            </div>
            <ul className="userProfile__content-list">
              <li>
                <p>Ріст</p>
                <p>186 см</p>
              </li>
              <li>
                <p>Вага</p>
                <p>80 кг</p>
              </li>
              <li>
                <p>Колір очей</p>
                <p>Сині</p>
              </li>
              <li>
                <p>Колір волосся</p>
                <p>Світлі</p>
              </li>
              <li>
                <p>Мета знайомства</p>
                <p>Поки не знаю</p>
              </li>
            </ul>
            <div className="userProfile__content-about">
              <h3>Про себе</h3>
              <p>
                Задача организации, в особенности же сложившаяся структура организации представляет
                собой интересный эксперимент проверки модели развития.
              </p>
              <p>
                Задача организации, в особенности же постоянный количественный рост и сфера нашей
                активности играет важную роль в формировании позиций, занимаемых участниками
                в отношении поставленных задач.
              </p>
            </div>
            <span>На сайте с 21.08.2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};
