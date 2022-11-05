import React from 'react';
import {Switch, Route} from "react-router-dom";
import NewsList from "../pages/NewsList";
import PageCardNew from "../pages/PageCardNew";


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <NewsList/>
            </Route>
            <Route path="/cartitem">
                <PageCardNew/>
            </Route>

        </Switch>

    );
};

export default AppRouter;