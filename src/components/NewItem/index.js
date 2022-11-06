import React from 'react';

const NewItem = ({id, title, score, time, by, descendants}) => {
    return (
        <div>
            {id}
            {title}
            {score}
            {time}
            {by}
            <b>{descendants}</b>
        </div>
    );
};

export default NewItem;