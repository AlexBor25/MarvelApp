import { API_KEY, URL } from '../../constants';
import { GET_ALL_COMICS, GET_SINGLE_COMIC } from '../../actions/actions';
import {
  getMoreComics,
  singleComicError,
  singleComicLoading,
} from '../actionCreator';

export const getAllComics =
  (offset = 210) =>
  async (dispatch) => {
    try {
      dispatch(getMoreComics());
      const res = await fetch(
        `${URL}comics?${API_KEY}&limit=8&offset=${offset}`
      );

      if (!res.ok) throw new Error(`Произошла ошибка, код: ${res.status}`);

      const data = await res.json();

      if (res.ok) dispatch({ type: GET_ALL_COMICS, payload: data.data });
    } catch {}
  };

export const getSingleComic = (id) => async (dispatch) => {
  try {
    dispatch(singleComicLoading());

    const res = await fetch(`${URL}comics/${id}?${API_KEY}`);

    if (!res.ok) {
      dispatch(singleComicError());
      throw new Error(`Произошла ошибка, код: ${res.status}`);
    }

    const data = await res.json();
    console.log(data.data.results[0]);
    if (res.ok)
      dispatch({ type: GET_SINGLE_COMIC, payload: data.data.results[0] });
  } catch {}
};
