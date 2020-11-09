import React from 'react';
import {HashRouter as Router, Switch} from "react-router-dom";

import GlobalStyles from '../theme/globalStyles';
import {ThemeProvider} from "styled-components";
import theme from '../theme';

import storeCreator from '../state/store';

import {Provider} from 'react-redux';
import App from "./App/App";
import {Redirect} from "react-router";


const store = storeCreator();

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        </ThemeProvider>
    )
}

export default Root;