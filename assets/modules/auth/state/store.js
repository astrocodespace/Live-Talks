import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";

const reducer = combineReducers({
    user: userReducer
});

export default () =>
    configureStore({
        reducer,
        middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
        devTools: process.env.NODE_ENV !== "production"
    });
