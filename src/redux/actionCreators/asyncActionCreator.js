import {
  ADD_CHARS,
  GET_ALL_CHARS,
  GET_RANDOM_CHAR,
  GET_SELECTED_CHAR,
} from '../actions/actions';
import { URL, API_KEY } from '../constants';
import {
  addCharsLoading,
  allCharsLoading,
  charsEnded,
  loadingRandomChar,
  loadingSelectedChar,
  randomCharError,
  selectedCharError,
} from './actionCreator';

export const getAllCharacters = () => async (dispatch) => {
  try {
    dispatch(allCharsLoading());

    const res = await fetch(`${URL}characters?${API_KEY}&limit=9&offset=210`);

    if (!res.ok) throw new Error(`Произошла ошибка, код: ${res.status}`);

    const data = await res.json();
    console.log(data);

    if (res.ok) dispatch({ type: GET_ALL_CHARS, payload: data.data });
  } catch {}
};

export const addChars = (offset) => async (dispatch) => {
  try {
    dispatch(addCharsLoading());
    const res = await fetch(
      `${URL}characters?${API_KEY}&limit=9&offset=${offset}`
    );

    if (!res.ok) throw new Error(`Произошла ошибка, код: ${res.status}`);

    const data = await res.json();

    if (data.data.results < 9) dispatch(charsEnded());

    if (res.ok) dispatch({ type: ADD_CHARS, payload: data.data });
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

export const getChar = (id) => async (dispatch) => {
  try {
    dispatch(loadingSelectedChar());

    const res = await fetch(`${URL}characters/${id}?${API_KEY}`);

    if (!res.ok) {
      dispatch(selectedCharError());
      throw new Error(`Произошла ошибка, код: ${res.status}`);
    }

    const data = await res.json();
    console.log(data.data.results[0]);
    if (res.ok)
      dispatch({ type: GET_SELECTED_CHAR, payload: data.data.results[0] });
  } catch {}
};
