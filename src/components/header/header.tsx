import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import { useLocation, NavLink } from 'react-router-dom';

import { headerNav, Notification } from '..';

import './header.scss';

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [notificationMenu, setNotificationMenu] = useState(false);
  const cookies = new Cookies();

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
        <div
          className={
            location.pathname !== locationRegister && location.pathname !== locationLogin
              ? 'header__content'
              : 'header__content header__content-text'
          }>
          <div className="header__logo">
            <NavLink to="/">
              <img src="/assets/logo.svg" alt="" />
              <p>Znakomstva.ua</p>
            </NavLink>
          </div>
          {cookies.get('Token') &&
          location.pathname !== locationRegister &&
          location.pathname !== locationLogin ? (
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
                <li>
                  <NavLink onClick={() => console.log()} to="/search">
                    <img
                      className="header__content-item__icon"
                      src="/assets/header/search.svg"
                      alt=""
                    />
                  </NavLink>
                </li>
                <li>
                  <div onClick={() => setNotificationMenu(!notificationMenu)}>
                    <img
                      className="header__content-item__icon"
                      src="/assets/header/bell.svg"
                      alt=""
                    />
                  </div>
                </li>
                <Notification notificationMenu={notificationMenu} />
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
              <NavLink
                className="header__content-btn"
                to={location.pathname === locationLogin ? '/register' : '/login'}>
                {location.pathname === locationLogin ? 'Реєстрація' : 'Увійти'}
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
