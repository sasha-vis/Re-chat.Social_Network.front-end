import { EXIT_ACCOUNT, SET_USER } from './../constants/user.constants';

let defaultData = [];

let result = (state = defaultData, action) => {
  switch (action.type) {
      case SET_USER:
        return ({
            ...state,
            user: action.data
        });
      case EXIT_ACCOUNT:
        localStorage.removeItem('token')
        return ({
            ...state,
            user: state
        });
      default:
          return state;
  }
};

export default result;