//封装高阶组件，实现权限控制
//有token，则放行，没有token，则跳转到登录页面

import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

export function AuthRoute({ children }) {
    const token = getToken()
    if(token){
        return <>{children}</>
    }else{
        return <Navigate to={'/login'} replace/> //replace 强制跳转，不留历史记录
    }
}

