import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { navbarNav } from '..';
import { removeToken } from '../../redux/slice/auth';

import './navbar.scss';

interface NavbarProps {
  navbarOpen: boolean;
}

export const Navbar: FC<NavbarProps> = ({ navbarOpen }) => {
  const location = useLocation();
  const dispatch = useDispatch()

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
        <li>
          <NavLink onClick={() => dispatch(removeToken(""))} to="/register">
            <img src="/assets/navbar/logout.svg" alt="" />
            Вихід
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
