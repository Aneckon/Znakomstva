import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, Header, Profile } from './components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
};
