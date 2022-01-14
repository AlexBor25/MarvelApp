import {
  ADD_CHARS,
  ADD_CHARS_LOADING,
  CHARS_ENDED,
  GET_ALL_CHARS,
  GET_RANDOM_CHAR,
  GET_SELECTED_CHAR,
  LOADING_ALL_CHARS,
  LOADING_RANDOM_CHAR,
  LOADING_SELECTED_CHAR,
  RANDOM_CHAR_ERROR,
  SELECTED_CHAR_ERROR,
} from '../actions/actions';

const initialState = {
  loading: false,
  charsEnded: false,
  newCharsLoading: false,
  results: [],
  offset: null,
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
  selectedChar: {
    hasError: false,
    comics: {
      items: [],
    },
    loading: false,
    description: '',
    thumbnail: {
      path: '',
      extension: 'jpg',
    },
    name: '',
    id: null,
    urls: [],
  },
  activeChar: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ALL_CHARS:
      return { ...state, loading: true };
    case GET_ALL_CHARS:
      return {
        ...state,
        results: [...action.payload.results],
        loading: false,
        offset: action.payload.offset,
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
    case LOADING_SELECTED_CHAR:
      return {
        ...state,
        selectedChar: { ...state.selectedChar, loading: true },
      };
    case GET_SELECTED_CHAR:
      return {
        ...state,
        selectedChar: {
          ...state.selectedChar,
          ...action.payload,
          loading: false,
          hasError: false,
        },
        activeChar: action.payload.name,
      };
    case SELECTED_CHAR_ERROR:
      return {
        ...state,
        selectedChar: {
          ...state.selectedChar,
          hasError: true,
          loading: false,
        },
      };
    case ADD_CHARS_LOADING:
      return {
        ...state,
        newCharsLoading: true,
      };
    case ADD_CHARS:
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        newCharsLoading: false,
        offset: action.payload.offset,
      };
    case CHARS_ENDED:
      return {
        ...state,
        charsEnded: true,
      };
    default:
      return state;
  }
};

export default charactersReducer;
