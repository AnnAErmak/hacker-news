import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import CommentList from "../components/CommentList";

const PageCardNew = () => {

    const {id} = useParams()
    const [a, seta] = useState(null)
    const [commentsRoot, setCommentsRoot] = useState([])
    useEffect(() => {
        async function fetchStorie (){
            try{
                const data  = await fetch(`https://hacker-news.firebaseio.com/v0/item/33488227.json?print=pretty`)
                    .then(data => data.json())
                seta(data)
                const commId = data.kids
                const comments = await Promise.all(
                    commId.map(id => {
                        return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                            .then(data => data.json())
                    })
                );
                setCommentsRoot(comments)

            }catch (err){
                console.log('что-то пошло не так! Ошибка: ' + err)
            }

        }
        fetchStorie()

    }, [])


    if(!a) return 'Загрузка...'

    return(

        <div>
            Карточка с новостью
            <Link to="/">
                <button>На главную</button>
            </Link>
            <button>Обновить комментарии</button>
            {/*<HeaderNew />*/}
            <CommentList comments = {commentsRoot}/>

        </div>
)
};

export default PageCardNew;