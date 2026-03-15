import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";

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
                element:<Apps></Apps>
            },
            {
                path:'/install',
                element:<Installation></Installation>
            }
        ]
    }
])
export default router;