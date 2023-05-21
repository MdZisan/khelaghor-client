import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// const Home = lazy(()=>import("../Components/Home/Home"));
import MainLayout from "../Layouts/MainLayout";
const Home = lazy(()=>import( "../Components/Home/Home/Home"));
const Login = lazy(()=>import( "../Components/Login/Login"));
const Register = lazy(()=>import( "../Components/Register/Register"));
const Blogs = lazy(()=>import( "../Components/Blogs/Blogs"));
const AddToy = lazy(()=>import( "../Components/Toys/AddToy/AddToy"));
const AllToys = lazy(()=>import( "../Components/Toys/AllToys/AllToys"));
const ToyDetails = lazy(()=>import( "../Components/Toys/ToyDetails/ToyDetails"));
const MyToy = lazy(()=>import( "../Components/Toys/MyToy/MyToy"));
const UpdateToy = lazy(()=>import( "../Components/Toys/UpdateToy/UpdateToy"));
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";




// import Home from "../Components/Home/Home/Home";
// import Login from "../Components/Login/Login";
// import Register from "../Components/Register/Register";
// import Blogs from "../Components/Blogs/Blogs";
// import AddToy from "../Components/Toys/AddToy/AddToy";
// import AllToys from "../Components/Toys/AllToys/AllToys";
// import ToyDetails from "../Components/Toys/ToyDetails/ToyDetails";
// import MyToy from "../Components/Toys/MyToy/MyToy";
// import UpdateToy from "../Components/Toys/UpdateToy/UpdateToy";








const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },{
                path:'alltoys',
                element:<AllToys></AllToys>
            },{
                path:'toy/:id',
                element:<PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader:({params})=>fetch(`https://khelaghor-server-production.up.railway.app/toy/${params.id}`)
            },{
                path:'mytoy',
                element:<PrivateRoutes><MyToy></MyToy></PrivateRoutes>
            },{
                path:'updateToy/:id',
                element:<PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
                loader:({params})=>fetch(`https://khelaghor-server-production.up.railway.app/toy/${params.id}`)
            }

        ]
    }
])

export default Routes;