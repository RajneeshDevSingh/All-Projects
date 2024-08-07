import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import MovieOverView from "./MovieOverView";



const Body = () => {
  
 
 const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
  },
  {
    path:"/browse",
    element:<Browse/>
  },
  {
  path:"/browse/movie-overview",
  element:<MovieOverView/>,
  },
])




  return (
    <div className="body">
      <RouterProvider router={appRouter}/>
      
    </div>
  );
};

export default Body;
