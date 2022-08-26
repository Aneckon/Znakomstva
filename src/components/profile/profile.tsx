import React, { useState } from 'react';

import { Navbar, ProfileForm, ProfilePhoto } from '..';

import './profile.scss';

export const Profile = () => {
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
          <div className="profile__content">
            <h2>Профиль</h2>
            <div className="profile__content-wraper">
              <ProfilePhoto />
              <ProfileForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
