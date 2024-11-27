//组合redux子模块+导出store

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/User";

export default configureStore({
    reducer:{
        user:userReducer
    }
})