import React, {useEffect, useState} from 'react';
import arrow from '../../assets/img/arrow-down.svg'
const CommentItem = ({data}) => {
const [showSubComments, setShowSubComments] = useState([])
const [isOpenComment, setOpenComments] = useState(false)


    const handlerSubComments = async (kids = []) => {
        if(kids.length ){
            const subComments = await Promise.all(
                kids.map(commentId => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
                        .then(data => data.json())
                })
            );
            setShowSubComments(subComments)
        }
    }
    useEffect(() => {
        console.log(showSubComments)
    }, [showSubComments])

    return (
        <div onClick={() => handlerSubComments(data?.kids)} style={{marginLeft: 25}}>
            <h2 style={{border: 1}}>{data.text}</h2>
            {data?.kids && <img src={arrow} style={{width:20, marginLeft: 20}}/>}
            <br/>
            <br/>
            <br/>

            {!!showSubComments.length && showSubComments.map(comm => (<CommentItem key={comm.id} data = {comm}/>))}
        </div>
    );
};

export default CommentItem;