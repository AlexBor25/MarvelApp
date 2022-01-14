import {
  ADD_CHARS_LOADING,
  CHARS_ENDED,
  LOADING_ALL_CHARS,
  LOADING_RANDOM_CHAR,
  LOADING_SELECTED_CHAR,
  RANDOM_CHAR_ERROR,
  SELECTED_CHAR_ERROR,
} from '../actions/actions';

export const allCharsLoading = () => ({ type: LOADING_ALL_CHARS });
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
