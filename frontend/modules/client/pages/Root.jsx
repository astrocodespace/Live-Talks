import React from 'react';
import { HashRouter as Router, Switch } from "react-router-dom";

import GlobalStyles from '../theme/globalStyles';
import { ThemeProvider } from "styled-components";
import theme from '../theme';

import storeCreator from '../state/store';

import { Provider } from 'react-redux';
import App from "./App/App";

import { LayoutComponent } from "../common";

const store = storeCreator();

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Provider store={store}>
                <Router>
                    <LayoutComponent>
                        <App/>
                    </LayoutComponent>
                </Router>
            </Provider>
        </ThemeProvider>
    )
}

export default Root;