import { SET_FAVORITEPOSTS } from './../constants/posts.constants';

let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
      case SET_FAVORITEPOSTS:
        return ({
            ...state,
            favoritePosts: action.data
        });
      default:
          return state;
  }
};

export default result;