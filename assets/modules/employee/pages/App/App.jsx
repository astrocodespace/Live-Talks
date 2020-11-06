import React, { useEffect, useState } from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "../Auth/Login";

const App = () => {
    return (
        <Switch>
            <Route path={'/'} component={Login}/>
        </Switch>
    );
}

export default App;