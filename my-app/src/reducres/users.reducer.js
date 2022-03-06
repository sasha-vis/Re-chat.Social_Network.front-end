import { SET_USERS } from './../constants/user.constants';

let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
      case SET_USERS:
        return ({
            ...state,
            users: action.data
        });
      default:
          return state;
  }
};

export default result;