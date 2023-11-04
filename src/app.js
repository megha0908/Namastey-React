import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";




const Applayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([{
    path:"/",
    element : <Applayout/>,
    children:[
    {
        path:"/",
        element : <Body />
        
    },
        
    {
        path:"/About",
        element : <About/>
    
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/restaurant/:resID",
        element:<RestaurantMenu/>
    }

],
    errorElement:<Error/>
},



]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)