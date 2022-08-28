import React from 'react';
import { useLocation } from 'react-router-dom';

import { ChatUser, ChatMessages } from '..';

import './chat.scss';

export const Chat = () => {
  const location = useLocation();

  return (
    <div className={location.pathname === '/chat' ? 'chat' : 'chat chat__full'}>
      <div className="chat__navigate">
        <ChatUser />
      </div>
      {location.pathname === '/chat/1' && <ChatMessages />}
    </div>
  );
};
