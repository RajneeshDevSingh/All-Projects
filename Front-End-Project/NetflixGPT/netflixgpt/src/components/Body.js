import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider,createBrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/Firebase";
import { useDispatch} from "react-redux";


const Body = () => {
  const dispatch = useDispatch();
 
 const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
  },
  {
    path:"/browse",
    element:<Browse/>
  }
])


useEffect(() => {
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const { uid, email, displayName } = user;
      dispatch(addUser({uid:uid, email:email, displayName:displayName}))
   

      // ...
    } 
    else 
    {
      // User is signed out
      dispatch(removeUser())
     
    }
  });
}, []);

  return (
    <div>
      <RouterProvider router={appRouter}/>
      
    </div>
  );
};

export default Body;
