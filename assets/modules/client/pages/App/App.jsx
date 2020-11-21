import React, { useEffect, useState } from 'react';
import {Route, Switch} from "react-router-dom";
import Services from "../Services/Services";

const App = () => {
    return (
        <Switch>
            <Route path={'/'} component={Services}/>
        </Switch>
    );
}

export default App;