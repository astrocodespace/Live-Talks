import React, { useEffect, useState } from 'react';
import {Route, Switch} from "react-router-dom";
import {Rooms} from "../Rooms/Rooms";

const App = () => {
    return (
        <Switch>
            <Route path={'/'} component={Rooms}/>
        </Switch>
    );
}

export default App;
