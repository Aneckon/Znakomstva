import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

import { ChatUser, ChatMessages } from '..';

import './chat.scss';

export const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();
    if (!cookies.get('Token')) {
      navigate('/register');
    }
  }, [navigate]);

  return (
    <div className={location.pathname === '/chat' ? 'chat' : 'chat chat__full'}>
      <div className="chat__navigate">
        <ChatUser />
      </div>
      {location.pathname === '/chat/1' && <ChatMessages />}
    </div>
  );
};
