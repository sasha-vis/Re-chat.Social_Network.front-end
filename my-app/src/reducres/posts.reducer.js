import { SET_POSTS } from './../constants/posts.constants';
import { DELETE_POST } from './../constants/posts.constants';


let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
        case SET_POSTS:
            console.log(action.data)
            return ({
                ...state,
                posts: action.data
            });
        case DELETE_POST:
            return ({
                ...state,
                posts: action.data
            })
      default:
          return state;
  }
};

export default result;