import React from 'react';
import {Link, } from "react-router-dom";
import {useSelector} from "react-redux";

import NewItem from "../components/NewItem";

const NewsList = () => {
    const {news} = useSelector(state => state.newsReducer)

    return (
        <div>
            Страница новостей


                { news.map(storie => {
                    return (
                        <Link to={`/carditem/${storie.id}`} key={storie.id}>
                            <NewItem {...storie} />
                        </Link>
                    )
                })}
        </div>
    );
};

export default NewsList;