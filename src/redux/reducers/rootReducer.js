import { combineReducers } from 'redux';

import charactersReducer from './charactersReducer';
import comicsReducer from './comicsReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  comics: comicsReducer,
});

export default rootReducer;
