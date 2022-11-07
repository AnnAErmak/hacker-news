import React from 'react';
import './newItem.css'
import star from '../../assets/img/star.svg'
import {dateFormatting} from "../../utils/dateFormatting";

const NewItem = ({title, score, time, by, descendants}) => {

    return (
        <li>
            <h3 className="title-new">{title}</h3>
            <div className="info-new">
                <p className="author-new">{by}</p>
                <time className="date-new">{dateFormatting(time)}</time>
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