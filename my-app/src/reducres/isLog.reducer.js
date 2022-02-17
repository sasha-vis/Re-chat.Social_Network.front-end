import { CHANGE_BUTTON } from './../constants/isLog.constants';

let defaultData;

if (localStorage.getItem('isLog') === null) {
  defaultData = { isLog: false }
  localStorage.setItem('isLog', JSON.stringify(defaultData));
} else {
defaultData = { isLog: JSON.parse(localStorage.getItem('isLog')).isLog }
}

let result = (state = defaultData, action) => {
  switch (action.type) {
      case CHANGE_BUTTON:
              let value;
              if (localStorage.getItem('token') !== null) {
                value = true;
              } else {
                value = false;
              }

              localStorage.setItem('isLog', JSON.stringify({ isLog: value }));
              return ({
                ...state,
                isLog: value
              });
      default:
          return state;
  }
};

export default result;