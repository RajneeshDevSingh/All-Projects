import logo from './logo.svg';
import './App.css';

import {  createBrowserRouter,RouterProvider} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import User from './Component/User';
import UpdateUser from './Component/UpdateUser';
import CreateUser from './Component/CreateUser';

const routePaths = createBrowserRouter([
  {
    path:"/",
    element:<User/>
  },
  {
    path:"/UpdateUser",
    element:<UpdateUser/>
  },
  {
    path:"/CreateUser",
    element:<CreateUser/>
  }
])

function App() {

  return (
    <RouterProvider router={routePaths}>
    <div className="">
      
    </div>
    </RouterProvider>
  );
}

export default App;
