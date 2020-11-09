import {createReducer} from "@reduxjs/toolkit";
import {clearLoginError, fetchUser, loginUser} from "./userActions";

const initialState = {
    isLoggedIn: false,
    user: null,
    loading: false,
    loginError: null
}

export default createReducer(initialState, {
    [fetchUser.fulfilled]: (state, action) => {
        return {
            ...state,
            loading: false
        }
    },
    [fetchUser.rejected]: (state, action) => {

    },
    [loginUser.rejected]: (state, action) => {
        return {
            ...state,
            loading: false,
            loginError: action.payload.loginError
        }
    },
    [loginUser.pending]: (state, action) => {
        return {
            ...state,
            loading: true
        }
    },
    [loginUser.fulfilled]: (state, action) => {
        return {
            ...state,
            loading: false,
            isLoggedIn: true
        }
    },
    [clearLoginError.type]: (state, action) => {
        return {
            ...state,
            loginError: null
        }
    }
});