import { addNewsSuccessAction } from "../store/reducers/newsReducer";
import { loaderOffAction } from "../store/reducers/loaderReducer";
import { URL } from "../utils/const";

export const fetchNews = () => {
  return async (dispatch) => {
    const storiesIds = await fetch(`${URL}newstories.json`).then((response) =>
      response.json()
    );
    const storiesIds100 = storiesIds.slice(0, 100);

    const stories = await Promise.all(
      storiesIds100.map((storieId) => {
        return fetch(`${URL}item/${storieId}.json`).then((data) => data.json());
      })
    );
    dispatch(loaderOffAction());
    dispatch(addNewsSuccessAction(stories));
  };
};
