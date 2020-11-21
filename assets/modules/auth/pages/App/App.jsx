import React, { useEffect, useState } from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import Login from "../Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../state/user/userActions";

const App = () => {
    const dispatch = useDispatch();
    dispatch(fetchUser({
        history: useHistory()
    }));

    return (
        <Switch>
            <Route exact path={'/login'} component={Login}/>
        </Switch>
    );
}

export default App;