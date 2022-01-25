import {
  ADD_CHARS_LOADING,
  CHARS_ENDED,
  COMICS_ENDED,
  GET_MORE_COMICS,
  LOADING_RANDOM_CHAR,
  LOADING_SELECTED_CHAR,
  RANDOM_CHAR_ERROR,
  SELECTED_CHAR_ERROR,
  SINGLE_COMICS_ERROR,
  SINGLE_COMICS_LOADING,
} from '../actions/actions';

export const loadingRandomChar = () => ({ type: LOADING_RANDOM_CHAR });
export const randomCharError = () => ({
  type: RANDOM_CHAR_ERROR,
});
export const loadingSelectedChar = () => ({ type: LOADING_SELECTED_CHAR });
export const selectedCharError = () => ({
  type: SELECTED_CHAR_ERROR,
});
export const addCharsLoading = () => ({
  type: ADD_CHARS_LOADING,
});
export const charsEnded = () => ({
  type: CHARS_ENDED,
});

export const comicsEnded = () => ({
  type: COMICS_ENDED,
});
export const getMoreComics = () => ({
  type: GET_MORE_COMICS,
});
export const singleComicError = () => ({
  type: SINGLE_COMICS_ERROR,
});
export const singleComicLoading = () => ({
  type: SINGLE_COMICS_LOADING,
});
