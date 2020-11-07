import {createReducer} from "@reduxjs/toolkit";
import {fetchServices, selectService} from "./servicesActions";
import {FileIcon} from "../../pages/Services/assets/FileIcon";
import React from "react";

const initialState = {
    loading: true,
    data: [],
    current: null
}

const data = [
    {
        id: 1,
        name: "Tax Consultation",
        icon: 'FileIcon'
    },
    {
        id: 2,
        name: "Submission of the application",
        icon: 'FileIcon'
    }
];

export default createReducer(initialState, {
    [fetchServices.type]: (state, action) => {
        return {
            ...state,
            data,
            loading: false
        }
    },
    [selectService.type]: (state, action) => {
        return {
            ...state,
            current: action.payload
        }
    }
});