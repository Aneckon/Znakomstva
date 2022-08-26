import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import { Button, headerNav, headerIcon } from '..';

import './header.scss';

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const location = useLocation();
  const locationLogin = '/login';
  const locationRegister = '/register';

  return (
    <header
      className={
        location.pathname !== locationRegister && location.pathname !== locationLogin
          ? 'header header__main'
          : 'header'
      }>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <NavLink to="/">
              <img src="/assets/logo.svg" alt="" />
              <p>Znakomstva.ua</p>
            </NavLink>
          </div>
          {location.pathname !== locationRegister && location.pathname !== locationLogin ? (
            <nav className="header__content-main">
              <ul
                className={
                  menu ? 'header__content-list__navigate block' : 'header__content-list__navigate'
                }>
                {headerNav.map((item) => (
                  <li className="header__content-item" key={item.id}>
                    <NavLink to={item.link}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
              <ul className="header__content-list__icon">
                {headerIcon.map((item) => (
                  <li key={item.id}>
                    <NavLink to={item.link}>
                      <img className="header__content-item__icon" src={item.icon} alt="" />
                    </NavLink>
                  </li>
                ))}
                <li className="header__content-user">
                  <NavLink to="/profile">
                    <img src="/assets/header/user.png" alt="" />
                    <p>Иван Иванов</p>
                  </NavLink>
                </li>
              </ul>
              <ul className="header__content-list__menu">
                <li onClick={() => setMenu(!menu)}>
                  <img
                    src={menu ? '/assets/header/menu-remove.svg' : '/assets/header/menu.svg'}
                    alt=""
                  />
                </li>
              </ul>
            </nav>
          ) : (
            <div className="header__content-auth">
              <p>
                {location.pathname === locationLogin ? 'Вперше тут?' : 'Вже є обліковий запис?'}
              </p>
              <Button className="header__content-btn">
                {location.pathname === locationLogin ? 'Увійти' : 'Реєстрація'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
