import { createAction } from "@reduxjs/toolkit";

const FETCH_SERVICES = 'services/fetch';
export const fetchServices = createAction(FETCH_SERVICES);

const SELECT_SERVICE = 'services/select';
export const selectService = createAction(SELECT_SERVICE);