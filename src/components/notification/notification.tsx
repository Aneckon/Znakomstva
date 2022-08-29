import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import './notification.scss';

interface NotificationProps {
  notificationMenu: boolean;
}

export const Notification: FC<NotificationProps> = ({ notificationMenu }) => {
  const navigate = useNavigate();

  return (
    <div className={notificationMenu ? 'notification block' : 'notification'}>
      <div className="notification__content">
        <div className="notification__item">
          <div onClick={() => navigate('/profile/1')} className="notification__item-user">
            <img src="/assets/header/user.png" alt="" />
            <p>Иван Иванов</p>
          </div>
          <div className="notification__item-content">
            <p>+1</p>
            <img src="/assets/profile/favorite.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
