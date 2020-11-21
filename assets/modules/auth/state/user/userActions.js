import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import config from '../../../../config';


const FETCH_USER = 'user/fetch';
export const fetchUser = createAsyncThunk(FETCH_USER, async (payload, {dispatch, getState}) => {
    const response = await fetch(`${config.url}/auth/user`,{
        method: 'GET',
        credentials: "include",
    })

    if (response.status === 401 || response.status === 403 && payload.history) {
        const { history } = payload;
        history.push('/login');

        return {
            data: null
        };
    }

    const { data } = await response.json();

    console.log(data);
    window.location.href = data.discriminator === 'client'
        ? config.clientAppUrl
        : config.employeeAppUrl

    return {
        data
    }
});

const CLEAR_LOGIN_ERROR = 'user/clean-login-error';
export const clearLoginError = createAction(CLEAR_LOGIN_ERROR);

const LOGIN_USER = 'user/login';
export const loginUser = createAsyncThunk(LOGIN_USER, async (payload, {dispatch, getState, rejectWithValue}) => {
    const { loginData } = payload;
    const response = await fetch(`${config.url}/auth/login`,{
        method: 'POST',
        body: JSON.stringify(loginData),
        credentials: 'include'
    })


    if (response.status !== 200) {
        return rejectWithValue({
            loginError: await response.json()
        })
    }

    console.log('dispatch');
    await dispatch(fetchUser());
});