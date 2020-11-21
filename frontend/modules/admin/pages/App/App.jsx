import React, {useEffect, useState} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Home} from "../Home/Home";
import {NavigationComponent} from "../../common/NavigationComponent/NavigationComponent";
import {Services} from "../Services/Services";
import {SLayout} from "../../common/LayoutComponent/LayoutComponent.styled";

const App = () => {
    return (
        <>
            <NavigationComponent/>
            <SLayout>
                <HashRouter>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/services'} component={Services}/>
                    </Switch>
                </HashRouter>
            </SLayout>
        </>
    );
}

export default App;
