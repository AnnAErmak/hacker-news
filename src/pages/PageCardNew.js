import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const PageCardNew = () => {

    const {id} = useParams()
    const [a, seta] = useState(null)
    useEffect(() => {
        async function fetchStorie (){
            try{
                const data  = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
                    .then(data => data.json())
                seta(data)
            }catch (err){
                console.log('что-то пошло не так!')
            }

        }
        fetchStorie()
    }, [])

    console.log(a)
    return (
        <div>
            Карточка с новостью
            <Link to="/">
                <button>На главную</button>
            </Link>
            <button>Обновить комментарии</button>
            {/*<HeaderNew />*/}
            {/*<СommentsList />*/}
        </div>
    );
};

export default PageCardNew;