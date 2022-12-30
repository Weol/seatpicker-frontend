import React, { useRef } from "react";
import { useFormAction } from "react-router-dom";
import User from "./Models/User";

interface UserContextObject {
    user : User | null;
    setUser: (user: User | null) => void
}

export default React.createContext<UserContextObject>({user: null,  setUser: (user: User | null) => {}});