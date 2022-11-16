import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import NotFound from './Routes/NotFound';
import Main from './Routes/Main';
import Seats from './Routes/Seats';
import Login from './Routes/Login';
import RedirectLogin from './Routes/RedirectLogin';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/seats" element={<Seats />} />
      <Route path="/login" element={<Login />} />
      <Route path="/redirect-login" element={<RedirectLogin />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
