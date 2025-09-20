import Layout from "../layout/Layout"
import About_Me from "../pages/About_Me"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import { createBrowserRouter } from "react-router";
import Pages from "../pages/Pages"

const router =createBrowserRouter([
    {
        path:'',
        element:<Layout/>,
        children:[
            {
                path:'',
                element:<Home/>,
            },
            {
                path:'About_ME',
                element:<About_Me />,
            },
            {
                path:'Contact',
                element:<Contact/>,
            },
            {
                path:'Pages',
                element:<Pages />,
            },
        ]
    }
])
export default router