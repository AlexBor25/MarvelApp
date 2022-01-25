import {
  GET_ALL_COMICS,
  GET_MORE_COMICS,
  GET_SINGLE_COMIC,
  SINGLE_COMICS_ERROR,
  SINGLE_COMICS_LOADING,
} from '../actions/actions';

const initialState = {
  loading: true,
  results: [],
  offset: null,
  loadMoreComics: false,
  comicsEnded: false,
  error: false,
  singleComic: {
    loading: false,
    hasError: false,
    prices: [],
    thumbnail: {
      path: '',
      extension: 'jpg',
    },
  },
};

const comicsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMICS:
      return {
        ...state,
        results: [...state.results, ...action.payload.results],
        loading: false,
        offset: action.payload.offset,
        loadMoreComics: false,
      };
    case GET_MORE_COMICS:
      return {
        ...state,
        loadMoreComics: true,
      };
    case GET_SINGLE_COMIC:
      return {
        ...state,
        singleComic: { ...action.payload, loading: false, hasError: false },
      };
    case SINGLE_COMICS_LOADING:
      return {
        ...state,
        singleComic: {
          ...state.singleComic,
          loading: true,
        },
      };
    case SINGLE_COMICS_ERROR:
      return {
        ...state,
        singleComic: {
          ...state.singleComic,
          loading: false,
          hasError: true,
        },
      };
    default:
      return state;
  }
};

export default comicsReducer;
