import { SET_FRIENDS } from './../constants/friendList.constants';


let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
      case SET_FRIENDS:
        return ({
            ...state,
            friends: action.data
        });
      default:
          return state;
  }
};

export default result;