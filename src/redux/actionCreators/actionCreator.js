import {
  LOADING_ALL_CHARS,
  LOADING_RANDOM_CHAR,
  RANDOM_CHAR_ERROR,
} from '../actions/actions';

export const allCharsLoading = () => ({ type: LOADING_ALL_CHARS });
export const loadingRandomChar = () => ({ type: LOADING_RANDOM_CHAR });
export const randomCharError = () => ({
  type: RANDOM_CHAR_ERROR,
});
