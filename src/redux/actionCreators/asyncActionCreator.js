import { GET_ALL_CHARS, GET_RANDOM_CHAR } from '../actions/actions';
import { URL, API_KEY } from '../constants';
import {
  allCharsLoading,
  loadingRandomChar,
  randomCharError,
} from './actionCreator';

export const getAllCharacters =
  (limit = 9) =>
  async (dispatch) => {
    try {
      dispatch(allCharsLoading());

      const res = await fetch(
        `${URL}characters?${API_KEY}&limit=${limit}&offset=210`
      );

      if (!res.ok) throw new Error(`Произошла ошибка, код: ${res.status}`);

      const data = await res.json();
      console.log(data);

      if (res.ok) dispatch({ type: GET_ALL_CHARS, payload: data.data });
    } catch {}
  };

export const getRandomChar = (id) => async (dispatch) => {
  try {
    dispatch(loadingRandomChar());

    const res = await fetch(`${URL}characters/${id}?${API_KEY}`);

    if (!res.ok) {
      dispatch(randomCharError());
      throw new Error(`Произошла ошибка, код: ${res.status}`);
    }

    const data = await res.json();

    if (res.ok)
      dispatch({ type: GET_RANDOM_CHAR, payload: data.data.results[0] });
  } catch {}
};
