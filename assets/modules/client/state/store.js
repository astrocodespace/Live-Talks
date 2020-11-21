import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeReducer";
import servicesReducer from "./services/servicesReducer";

const reducer = combineReducers({
    employee: employeeReducer,
    services: servicesReducer
});

export default () =>
    configureStore({
        reducer,
        middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
        devTools: process.env.NODE_ENV !== "production"
    });
