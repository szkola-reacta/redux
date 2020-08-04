import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import counterReducer from "./counter/redux";
import postsReducer from "./posts/redux";
import uiReducer from "./ui/redux";
// import usersReducer from "./users/redux";


const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  ui: uiReducer,
  form: formReducer
  // users: usersReducer
});

export default rootReducer;
