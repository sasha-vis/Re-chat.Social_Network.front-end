import {combineReducers, createStore, applyMiddleware} from "redux";

import isLog from "./../reducres/isLog.reducer";
import user from "./../reducres/user.reducer";
import users from "./../reducres/users.reducer";
import posts from "./../reducres/posts.reducer";
import myPosts from "./../reducres/myPosts.reducer";
import favoritePosts from "./../reducres/favoritePosts.reducer";
import bookmarkPosts from "./../reducres/bookmarkPosts.reducer";
import requestsForFriendship from "./../reducres/requestsForFriendship.reducer";
import friends from "./../reducres/friends.reducer";

import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
  isLog: isLog,
  user: user,
  posts,
  myPosts,
  favoritePosts,
  bookmarkPosts,
  users,
  requestsForFriendship,
  friends
})

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)