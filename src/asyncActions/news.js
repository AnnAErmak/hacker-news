import {addNewsAction, addNewsStartedAction} from "../store/reducers/newsReducer";

export const fetchNews =  () => {
    return async dispatch => {
        dispatch(addNewsStartedAction())
        const storiesIds = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`)
            .then(response => response.json())
        const storiesIds100 = storiesIds.slice(0, 100)
        const stories = await Promise.all(
            storiesIds100.map(storieId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storieId}.json`)
                    .then(data => data.json())
                //.then(json => dispatch(addNewsAction(json)))
            })
        );
        dispatch(addNewsAction(stories))
    }
}

