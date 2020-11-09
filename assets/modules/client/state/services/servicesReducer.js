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
        icon: 'FileIcon',
        description: 'Tax consultants help their clients save money by making wise financial decisions about tax-related issues. They interview clients to gather information about their financial situations and devise strategies to help them reduce their tax liability by taking advantage of tax credits and deductions. Tax consultants ensure their clients fulfill their tax obligations and follow the law.'
    },
    {
        id: 2,
        name: "Submission of the application",
        icon: 'FileIcon',
        description: 'Application Submission means the date and time, as stipulated in the Core Plan, by which the Application must be submitted to DCA in order to be eligible for funding under this Plan.'
    },
    {
        id: 3,
        name: "Submission of the application",
        icon: 'FileIcon',
        description: 'Application Submission means the date and time, as stipulated in the Core Plan, by which the Application must be submitted to DCA in order to be eligible for funding under this Plan.'
    },
    {
        id: 4,
        name: "Submission of the application",
        icon: 'FileIcon',
        description: 'Application Submission means the date and time, as stipulated in the Core Plan, by which the Application must be submitted to DCA in order to be eligible for funding under this Plan.'
    },
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