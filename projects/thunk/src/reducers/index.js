import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer'

/** Combined reducers return values become state elements. */
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
