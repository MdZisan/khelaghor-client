import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Components/Login/Login";


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
                
            }

        ]
    }
])

export default Routes;