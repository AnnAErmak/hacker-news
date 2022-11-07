import React from 'react';
import './newItem.css'
import star from '../../assets/img/star.svg'

const NewItem = ({title, score, time, by, descendants}) => {
    const dateFormat = new Date(time * 1000);
    const displayDate = `${dateFormat.getDate()}.${dateFormat.getMonth() + 1}.${dateFormat.getFullYear()}`;
    return (
        <li>
            <h3 className="title-new">{title}</h3>
            <div className="info-new">
                <p className="author-new">{by}</p>
                <time className="date-new">{displayDate}</time>
                <div className="score-new">
                    <img src={star} width="20" alt="картинка рейтинга"/>
                    <span>{score}</span>
                </div>


            </div>
            <b>{descendants}</b>
        </li>
    );
};

export default NewItem;