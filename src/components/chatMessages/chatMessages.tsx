import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input, Message } from '..';

import './chatMessages.scss';

export const ChatMessages = () => {
  const navigate = useNavigate();
  const [messageValue, setMessageValue] = useState('');

  const messageUserData = async (message: string) => {
    console.log(message);
  };

  const onKeyEnter = (e: any) => {
    if (messageValue.length && messageValue.indexOf(' ') && e.key === 'Enter') {
      messageUserData(messageValue);

      // setTimeout(() => {
      //   messagesRef.current.scrollIntoView();
      //   setMessagesInput('');
      // }, 100);
    }
  };

  return (
    <div className="chatMessages">
      <div className="chatMessages__title">
        <p>Марина</p>
      </div>
      <div className="chatMessages__body">
        <Message className="message" />
        <Message className="message left" />
      </div>
      <div className="chatMessages__input">
        <Input
          placeholder="Написать сообщение..."
          className="input"
          onChange={(e) => setMessageValue(e.target.value)}
          value={messageValue}
          type={'text'}
          onKeyEnter={onKeyEnter}>
          <img src="/assets/send.svg" alt="" />
        </Input>
      </div>
      <div className="chatMessages__remove-mobile" onClick={() => navigate('/chat')}>
        <img src="/assets/header/menu-remove.svg" alt="" />
      </div>
    </div>
  );
};
