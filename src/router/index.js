//路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

import { createBrowserRouter} from 'react-router-dom';
import { AuthRoute} from "@/components/AuthRoute";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AuthRoute><Layout /></AuthRoute>,
        children:[
            {
                index:true,//默认子路由
                element:<Home />
            },
            {
                path:'article',
                element:<Article />
            },
            {
                path:'publish',
                element:<Publish />
            },
        ]
    },
    {
            path:"/login",
            element:<Login />
    }
])

export default router;