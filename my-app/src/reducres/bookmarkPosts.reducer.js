import { SET_BOOKMARKPOSTS } from './../constants/posts.constants';

let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
      case SET_BOOKMARKPOSTS:
        return ({
            ...state,
            bookmarkPosts: action.data
        });
      default:
          return state;
  }
};

export default result;