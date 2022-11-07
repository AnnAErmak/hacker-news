import './css/mainStyle.css';

import {useEffect} from "react";
import {fetchNews} from "./asyncActions/news";
import {useDispatch, useSelector} from "react-redux";
import NewsList from "./pages/NewsList";
import {loaderOnAction} from "./store/reducers/loaderReducer";

import {Route, Switch} from "react-router-dom";
import PageCardNew from "./pages/PageCardNew";


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loaderOnAction())
        dispatch((fetchNews()))

        const timerID = setInterval(() => dispatch((fetchNews())), 60000);
        return () => clearInterval(timerID);
    }, [])

    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={NewsList}/>
                <Route path="/carditem/:id" component={PageCardNew}/>
            </Switch>
        </div>
    );
}

export default App;
