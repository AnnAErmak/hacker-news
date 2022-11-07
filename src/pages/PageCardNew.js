import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import CommentList from "../components/CommentList";
import {useDispatch, useSelector} from "react-redux";
import {loaderOnAction} from "../store/reducers/loaderReducer";
import {fetchComments} from "../asyncActions/comments";

const PageCardNew = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.loaderReducer)
    const {comments} = useSelector(state => state.commentsReducer)

    const [headerNew, setHeaderNew] = useState({})

    useEffect(() => {
        dispatch(loaderOnAction())
        dispatch(fetchComments(id))

        const storie = async () => {
            const res =  await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(response => response.json())
            setHeaderNew(res)
        }
        storie()
    }, [])



    return(

        <div>
            Карточка с новостью
            <Link to="/">
                <button>На главную</button>
            </Link>
            <button onClick={() => {
                dispatch(loaderOnAction())
                dispatch(fetchComments(id))

            }}>Обновить комментарии</button>
            <div>
                {headerNew.id}
            </div>
            <div>
                {headerNew.url}
            </div>
            <div>
                {headerNew.title}
            </div>
            <div>
                {headerNew.time}
            </div>
            <div>
                {headerNew.by}
            </div>
            <div>
                {headerNew.descendants}
            </div>

            {loading && "Подождите... Идет загрузка данных!"}
            {comments.length ? <CommentList comments = {comments}/> : 'Нет ни одного комментария... Будте первым'}


        </div>
)
};

export default PageCardNew;

//`https://hacker-news.firebaseio.com/v0/item/33488227.json?print=pretty`