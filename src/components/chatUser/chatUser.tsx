import React from 'react';
import { useNavigate } from 'react-router-dom';

import './chatUser.scss';

export const ChatUser = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/chat/1')} className="chatUser active">
      <img src="/assets/card/photo.png" alt="" />
      <div className="chatUser__content">
        <h3>Марина</h3>
        <p>Привет! Как дела?</p>
      </div>
    </div>
  );
};
