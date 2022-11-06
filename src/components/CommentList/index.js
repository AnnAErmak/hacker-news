import React, {useEffect, useState} from 'react';

import './comentList.css'
import CommentItem from "../CommentItem";

const CommentList = ({comments}) => {

    const [selectCom, setSelectComm] = useState({})
    const [subComm, setSubComm] = useState([])

    return (
        <>
            {/*{console.log(comments)}*/}
            {comments.map(comm => <CommentItem key={comm.id} data = {comm}/>)}
        </>


    );
};

export default CommentList;


// {
//     comments.map(comm => (
//         <div className='com' key={comm.id}>
//             {comm.text}
//             <br/>
//             <div className='kids'>{comm.kids}</div>
//             {comm.kids && comm.kids.length ? <CommentList comments = {comm.kids} />: null}
//         </div>
//     ))
// }