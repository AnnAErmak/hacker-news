import React from 'react';
import arrow from '../../assets/img/arrow-down.svg'
import './comentCard.css'
const CommentList = ({comments}) => {
    return (
        <>
            {comments.map(comm => (
                <div className='com' key={comm.id}>
                    {comm.text}
                    <br/>
                    {comm.kids && <img src={arrow} width="20"/>}
                </div>
            ))}

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