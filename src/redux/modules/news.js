
const GET_NEWS = 'GET_NEWS'

const defaultState = {
    news: []
}

export default (state = defaultState, {type, payload}) => {
    switch (type){
        case GET_NEWS:
            return {...state, news: payload}
        default:
            return state
    }
}

export const getNews = () => async (dispatch) => {
    dispatch({type: GET_NEWS, payload: [{id: 1, title: 'abc'}]})
}