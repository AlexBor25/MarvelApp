import {
  GET_ALL_CHARS,
  GET_RANDOM_CHAR,
  LOADING_ALL_CHARS,
  LOADING_RANDOM_CHAR,
  RANDOM_CHAR_ERROR,
} from '../actions/actions';

const initialState = {
  loading: false,
  results: [],
  total: null,
  randomChar: {
    hasError: false,
    loading: false,
    description: null,
    thumbnail: {
      path: '',
      extension: '',
    },
    name: null,
    id: null,
    urls: [],
  },
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ALL_CHARS:
      return { ...state, loading: true };
    case GET_ALL_CHARS:
      return {
        ...state,
        results: [...action.payload.results],
        total: action.payload.total,
        loading: false,
      };
    case LOADING_RANDOM_CHAR:
      return {
        ...state,
        randomChar: { ...state.randomChar, loading: true },
      };
    case GET_RANDOM_CHAR:
      return {
        ...state,
        randomChar: {
          ...state.randomChar,
          ...action.payload,
          loading: false,
          hasError: false,
        },
      };
    case RANDOM_CHAR_ERROR:
      return {
        ...state,
        randomChar: {
          ...state.randomChar,
          hasError: true,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default charactersReducer;
