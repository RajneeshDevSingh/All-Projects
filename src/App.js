import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantCard";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestautantMenu";
import { lazy , Suspense} from "react";


const About = lazy(()=> import("./components/About"))  // part of bundler read about code division; 

const AppLayout = ()=>
{
    return (
        <div className="app"> 
            <Header/>
            <Outlet/>       {/*   all the children will fill this place */}
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,

        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: (<Suspense  fallback={<h1>Loading Data-: ...........</h1>}> <About/> </Suspense>)
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",  // (/:for dynamic routing)
                element:<RestaurantMenu/>
            },
        ],
        errorElement: <ErrorPage/>
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>); 

root.render(<RouterProvider router={AppRouter}/>)