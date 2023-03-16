import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import NotFound from './Pages/NotFound';
import Seats from './Pages/Seats';
import RedirectLogin from './Pages/RedirectLogin';
import MainAppBar from './MainAppBar';
import {UserContext} from './UserContext';
import { useState } from 'react';
import User from './Models/User';
import GetLoggedInUser from './Adapters/GetLoggedInUser';

export default function App() {
  let [user, setUser] = useState<User | null>(GetLoggedInUser())

  return (
    <UserContext.Provider value={{user: user, setUser: setUser}}>
      <MainAppBar />
      <Routes>
        <Route path="/" element={<Seats/>} />
        <Route path="/redirect-login" element={<RedirectLogin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}
