import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, Header } from './components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};
