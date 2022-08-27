import React from 'react';

import { advicesOnline, advicesOfline } from '..';

import './advices.scss';

export const Advices = () => {
  return (
    <div className="advices">
      <div className="container">
        <h2>Поради</h2>
        <ol className="advices__list">
          <p>
            Як з будь-яким сервісом, що використовує місцеперебування, важливо мати здоровий глузд
            при спілкуванні з людьми онлайн.
          </p>
          {advicesOnline.map((item) => (
            <li key={item.id}>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
        <ol className="advices__list">
          <p>Поради для зустрічей офлайн</p>
          {advicesOfline.map((item) => (
            <li key={item.id}>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
