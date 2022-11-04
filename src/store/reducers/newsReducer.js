const defaultState = {
    isLoaded: false,
    news: []
}
const ADD_NEWS = 'ADD_NEWS'
const ADD_NEWS_STARTED = 'ADD_NEWS_STARTED'

export const newsReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_NEWS_STARTED:
            return {...state, isLoaded: true}
        case ADD_NEWS:
            return {...state, news: [...state.news, ...action.payload], isLoaded: false}
        default:
            return state
    }
}

export const addNewsAction = (payload) => ({type: ADD_NEWS, payload })
export const addNewsStartedAction = () => ({type: ADD_NEWS_STARTED })