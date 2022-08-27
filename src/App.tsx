import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Login,
  Header,
  Profile,
  Footer,
  Main,
  Advices,
  AboutUs,
  NetworkError,
  UserProfile,
  Favorite,
  Register,
} from './components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/favorites" element={<Favorite />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<UserProfile />} />

        <Route path="/advices" element={<Advices />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="*" element={<NetworkError />} />
      </Routes>
      <Footer />
    </div>
  );
};
