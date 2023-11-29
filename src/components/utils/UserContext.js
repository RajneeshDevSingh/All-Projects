import { Context, createContext } from "react";


const UserContext = createContext({loggedInuser:"Default User"})

// UserContext.Provider

export default UserContext;