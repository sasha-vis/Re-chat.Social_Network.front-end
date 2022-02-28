import { SET_REQUESTS } from './../constants/friendList.constants';


let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
      case SET_REQUESTS:
        return ({
            ...state,
            requestsForFriendship: action.data
        });
      default:
          return state;
  }
};

export default result;