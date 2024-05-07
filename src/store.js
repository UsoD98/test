import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";

// store = 금고, reducer = 금고 안에서 파트가 나뉘어져 있는 것
// app 전체에 대한 state를 관리하기 위해 app.js나 index.js에서 store를 import해서 사용
export default configureStore({
    reducer : {
        "loginSlice": loginSlice
    }
})