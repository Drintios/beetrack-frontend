import { combineReducers } from 'redux';

import usersSlice from './users/users.slice';

export const rootReducer = combineReducers({
  users: usersSlice,
});
