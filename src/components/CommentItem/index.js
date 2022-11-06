import React, {useEffect, useState} from 'react';
import arrow from '../../assets/img/arrow-down.svg'
const CommentItem = ({data}) => {
const [showSubComments, setShowSubComments] = useState([])
const [isActiveComment, setActiveComments] = useState(false)

    const handlerSubComments = (kids = []) => {
        if(kids.length){
            setShowSubComments([1,2,3])
        }
    }
    useEffect(() => {
        console.log(showSubComments)
    }, [showSubComments])

    return (
        <div onClick={() => handlerSubComments(data?.kids)}>
            <h2 style={{border: 1}}>{data.text}</h2>
            {data?.kids && <img src={arrow} style={{width:20, marginLeft: 20}}/>}
            <br/>
            <br/>
            <br/>

            {showSubComments.length && 'Есть дочернии компаненты'}
        </div>
    );
};

export default CommentItem;