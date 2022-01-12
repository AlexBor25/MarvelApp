import { combineReducers } from 'redux';

import charactersReducer from './charactersReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  comics: 'asd',
});

export default rootReducer;
