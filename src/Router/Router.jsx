import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                index:true,
                element:<Home></Home>,

            }
        ]
    }
])
export default router;