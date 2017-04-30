import { combineReducers } from 'redux';

import { sessionReducer } from './session_reducer';
import { groupReducer } from './group_reducer';
import { eventReducer } from './event_reducer';
import { userReducer } from './user_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  groups: groupReducer,
  events: eventReducer
});

export default rootReducer;
