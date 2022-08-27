import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Login, Header, Profile, Footer, Main, Advices, AboutUs, NetworkError } from './components';

export const App = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/advices" element={<Advices />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="*" element={<NetworkError />} />
      </Routes>
      <Footer />
    </div>
  );
};
