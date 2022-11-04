import React from 'react';

const News = ({id, title, score, time, by}) => {
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

export default News;