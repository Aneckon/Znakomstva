import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <nav className="footer__nav">
            <ul>
              <li className="footer__list-item">
                <NavLink to="/about">Про нас</NavLink>
              </li>
              <li className="footer__list-item">
                <NavLink to="/support">Підтримка</NavLink>
              </li>
              <li className="footer__list-item">
                <NavLink to="/advices">Поради</NavLink>
              </li>
              <li className="footer__list-item">
                <NavLink to="/contacts">Контакти</NavLink>
              </li>
              <li className="footer__list-item">
                <NavLink to="/developers">Розробники</NavLink>
              </li>
            </ul>
          </nav>
          <div className="footer__copyright">
            <p>© Company InsertIT 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
