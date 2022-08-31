import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { navbarNav } from '..';

import './navbar.scss';

interface NavbarProps {
  navbarOpen: boolean;
}

export const Navbar: FC<NavbarProps> = ({ navbarOpen }) => {
  const location = useLocation();

  return (
    <nav className={navbarOpen ? 'navbar' : 'navbar block'}>
      <ul>
        {navbarNav.map((item) => (
          <li key={item.id}>
            <NavLink className={item.name === location.pathname ? 'active' : ''} to={item.link}>
              <img src={item.link === location.pathname ? item.iconActive : item.icon} alt="" />{' '}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
