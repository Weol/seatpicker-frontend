import React, {useContext, useRef} from "react";
import { useFormAction } from "react-router-dom";
import User from "./Models/User";

interface UserContextObject {
    user : User | null;
    setUser: (user: User | null) => void
}

var defaultValue: UserContextObject = {user: null,  setUser: (user: User | null) => {}};

export const UserContext = React.createContext<UserContextObject>(defaultValue);

export const useUserContext = () => useContext(UserContext)