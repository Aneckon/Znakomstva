import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { TopDating } from '..';

import './main.scss';

export const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();
    if (!cookies.get('Token')) {
      navigate('/register');
    }
  }, [navigate]);

  return (
    <div className="main">
      <div className="container">
        <TopDating title="Топ для знакомств" />
        <TopDating title="Жінки" />
        <TopDating title="Чоловіки" />
      </div>
    </div>
  );
};
