import './App.css';

import {useEffect} from "react";
import {fetchNews} from "./asyncActions/news";
import {useDispatch, useSelector} from "react-redux";
import NewsList from "./pages/NewsList";
import {loaderOnAction} from "./store/reducers/loaderReducer";

import {Route, Switch} from "react-router-dom";
import PageCardNew from "./pages/PageCardNew";




function App() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.loaderReducer)

    useEffect(() => {
        dispatch(loaderOnAction())
        dispatch((fetchNews()))

        const timerID = setInterval(() => dispatch((fetchNews())), 60000);
        return () => clearInterval(timerID);
    }, [])

    const handledBtnRefresh = () => {
        dispatch(loaderOnAction())
        dispatch((fetchNews()))
    }

    return (

            <Switch>
                <Route exact path="/">
                    <>
                        {!loading
                            ? (<>
                                <button disabled={loading} onClick={handledBtnRefresh}>Обновить новости</button>
                                <NewsList />
                            </>)
                            : "Подождите... Идет загрузка данных!"}
                    </>
                </Route>

                <Route path="/carditem/:id" component={PageCardNew} />
            </Switch>

    );
}

export default App;
