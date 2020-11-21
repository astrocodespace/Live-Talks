import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import config from "../../../../config";

const FETCH_SERVICES = 'services/fetch';
export const fetchServices = createAsyncThunk(FETCH_SERVICES, async (payload, {dispatch, getState}) => {
    const response = await fetch(`${config.url}/${config.version}/service`, {
        method: 'GET',
        credentials: 'include'
    })

    if (response.status !== 200) {
        window.location.href = config.authAppUrl;

        return {
            services: null,
            currentPage: 0
        }
    }

    const { items, current_page, total_items, items_per_page } = await response.json();

    return {
        items,
        currentPage: current_page,
        totalItems: total_items,
        itemsPerPage: items_per_page,
        loading: false
    }

});

const SELECT_SERVICE = 'services/select';
export const selectService = createAction(SELECT_SERVICE);