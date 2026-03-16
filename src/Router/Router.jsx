import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                index:true,
                element:<Home></Home>,
            },
            {
                path:'/apps',
                element:<Apps></Apps>,
                loader:async()=>{
                    const res = await axios('/heros.json');
                    return res.data;
                }
            },
            {
                path:'/install',
                element:<Installation></Installation>
            },
            {
                path:'*',
                element:<ErrorPage></ErrorPage>
               
            }
        ]
    }
])
export default router;