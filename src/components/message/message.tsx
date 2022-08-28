import React, { FC } from 'react';

import './message.scss';

interface MessageProps {
  className: string;
}

export const Message: FC<MessageProps> = ({ className }) => {
  return (
    <div className={className}>
      {className === 'message left' && <img src="/assets/card/photo.png" alt="" />}
      <div className="message__content">
        <p>Привет! Как дела?</p>
      </div>
      {className === 'message' && <img src="/assets/card/photo.png" alt="" />}
    </div>
  );
};
