import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Navbar, ProfileForm, ProfilePhoto, Setting, Selected } from '..';

import './profile.scss';

export const Profile = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="profile" onClick={() => setNavbarOpen(false)}>
      <div className="container">
        <div className="profile__wrraper">
          <div className="profile__navbar" onClick={(e) => e.stopPropagation()}>
            <Navbar navbarOpen={navbarOpen} />
            <div onClick={() => setNavbarOpen(!navbarOpen)} className="profile__navbar-menu">
              <img
                src={navbarOpen ? '/assets/header/menu-remove.svg' : '/assets/header/menu.svg'}
                alt=""
              />
            </div>
          </div>
          {location.pathname === '/profile' && (
            <div className="profile__content">
              <h2>Профиль</h2>
              <div className="profile__content-wraper">
                <ProfilePhoto />
                <ProfileForm />
              </div>
            </div>
          )}
          {location.pathname === '/profile/selected' && (
            <div className="profile__content">
              <h2>Вибрані</h2>
              <div className="profile__content-wraper">
                <Selected />
              </div>
            </div>
          )}
          {location.pathname === '/profile/setting' && (
            <div className="profile__content">
              <h2>Настройки</h2>
              <div className="profile__content-wraper">
                <Setting />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
