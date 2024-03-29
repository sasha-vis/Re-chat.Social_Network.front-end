import { SET_MYPOSTS } from './../constants/myPosts.constants';

let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
      case SET_MYPOSTS:
        return ({
            ...state,
            myPosts: action.data
        });
      default:
          return state;
  }
};

export default result;