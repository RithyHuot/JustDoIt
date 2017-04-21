import { combineReducers } from 'redux';

import { sessionReducer } from './session_reducer';
import { groupReducer } from './group_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  groups: groupReducer
});

export default rootReducer;
