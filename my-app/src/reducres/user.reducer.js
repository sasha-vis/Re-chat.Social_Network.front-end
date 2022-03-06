import { SET_USER } from './../constants/user.constants';

let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
      case SET_USER:
        localStorage.setItem('user', JSON.stringify(action.data))
        return ({
            ...state,
            user: action.data
        });
      default:
          return state;
  }
};

export default result;