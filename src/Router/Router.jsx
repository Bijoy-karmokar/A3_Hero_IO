import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage";
import AppDetails from "../pages/AppDetails";

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
                path:'/appDetail/:id',
                element:<AppDetails></AppDetails>,
                loader:async({params})=>{
                    const res = await axios('/heros.json');
                    const heros = res.data.find(hero=>hero.id === parseInt(params.id));
                    // console.log(heros);
                    return heros;
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