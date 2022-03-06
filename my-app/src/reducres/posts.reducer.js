import { SET_POSTS } from './../constants/posts.constants';

let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
        case SET_POSTS:
            return ({
                ...state,
                posts: action.data
            });
      default:
          return state;
  }
};

export default result;