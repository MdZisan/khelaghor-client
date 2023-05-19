import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blogs from "../Components/Blogs/Blogs";
import AddToy from "../Components/Toys/AddToy/AddToy";
import AllToys from "../Components/Toys/AllToys/AllToys";
import ToyDetails from "../Components/Toys/ToyDetails/ToyDetails";
import MyToy from "../Components/Toys/MyToy/MyToy";
import UpdateToy from "../Components/Toys/UpdateToy/UpdateToy";


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
            },{
                path:'toy/:id',
                element:<ToyDetails></ToyDetails>,
                loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
            },{
                path:'mytoy',
                element:<MyToy></MyToy>
            },{
                path:'updateToy/:id',
                element:<UpdateToy></UpdateToy>,
                loader:({params})=>fetch(`http://localhost:5000/toy/${params.id}`)
            }

        ]
    }
])

export default Routes;