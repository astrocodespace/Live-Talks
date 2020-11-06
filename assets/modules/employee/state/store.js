import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeReducer";

const reducer = combineReducers({
    employee: employeeReducer,
});

export default () =>
    configureStore({
        reducer,
        middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
        devTools: process.env.NODE_ENV !== "production"
    });
