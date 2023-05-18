import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blogs from "../Components/Blogs/Blogs";
import AddToy from "../Components/Toys/AddToy/AddToy";
import AllToys from "../Components/Toys/AllToys/AllToys";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:'login',
                element:<Login></Login>
            },{
                path:'register',
                element:<Register></Register>
            },
            {
                path:'blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'addtoy',
                element:<AddToy></AddToy>
            },{
                path:'alltoys',
                element:<AllToys></AllToys>
            }

        ]
    }
])

export default Routes;