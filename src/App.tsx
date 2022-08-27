import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, Header, Profile, Footer, Main, Advices, AboutUs } from './components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/advices" element={<Advices />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
};
