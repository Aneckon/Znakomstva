import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, Header, Profile, Footer, Main } from './components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};
