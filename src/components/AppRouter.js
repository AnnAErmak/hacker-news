import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import News from "../pages/News";
import CardNew from "../pages/CardNew";


const AppRouter = () => {
    return (
        <Switch>

            <Route exact path='/'>
                <News />
            </Route>
            <Route path='/cardnew'>
                <CardNew />
            </Route>
            <Redirect to='/' />
        </Switch>

    );
};

export default AppRouter;