import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound';
import Main from './Pages/Main';
import Seats from './Pages/Seats';
import Login from './Pages/Login';
import RedirectLogin from './Pages/RedirectLogin';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/seats" element={<Seats />} />
      <Route path="/redirect-login" element={<RedirectLogin />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
