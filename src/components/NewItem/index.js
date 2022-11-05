import React from 'react';

const NewItem = ({id, title, score, time, by}) => {
    return (
        <div>
            {id}
            {title}
            {score}
            {time}
            {by}
        </div>
    );
};

export default NewItem;