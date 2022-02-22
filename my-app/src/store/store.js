import {combineReducers, createStore, applyMiddleware} from "redux";

// import userReducer from "../reducers/user.reducer.js";
// import productsReducer from "../reducers/products.reducer.js";
// import platformReducer from "../reducers/platform.reducer.js";
import isLog from "./../reducres/isLog.reducer";
import user from "./../reducres/user.reducer";
import posts from "./../reducres/posts.reducer";
import myPosts from "./../reducres/myPosts.reducer";

import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
//   users: userReducer,
//   platform: platformReducer,
//   products: productsReducer,
  isLog: isLog,
  user: user,
  posts,
  myPosts
})

//export const store = createStore(rootReducer);

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)