import React, {useEffect} from 'react';
import '../components/NewItem/newItem.css'

import {Link, } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import NewItem from "../components/NewItem";
import {loaderOnAction} from "../store/reducers/loaderReducer";
import {fetchNews} from "../asyncActions/news";


const NewsList = () => {
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.loaderReducer)
    const {news} = useSelector(state => state.newsReducer)

    const handledBtnRefresh = () => {
        dispatch(loaderOnAction())
        dispatch((fetchNews()))
    }


    return (
        <div className='wrapper-page'>
            <div className="wrapper-page__header">
                <button disabled={loading} onClick={handledBtnRefresh}>Обновить новости</button>
            </div>
            <div className="wrapper-page__content"></div>
                {!loading
                    ? (<>
                        { news.map(storie => {
                            return (
                                <ul className='list1b'>
                                    <Link to={`/carditem/${storie.id}`} key={storie.id}>
                                        <NewItem {...storie} />
                                    </Link>
                                </ul>
                            )
                        })}
                    </>)
                    : "Подождите... Идет загрузка данных!"}
        </div>
    );
};

export default NewsList;