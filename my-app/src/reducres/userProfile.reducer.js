// import { CHANGE_BUTTON } from './../constants/isLog.constants';

let defaultData = null;

if (localStorage.getItem('token')) {
    let token = JSON.parse(localStorage.getItem('token')).user[2];

    defaultData = fetch(`https://localhost:7103/User/${token}`)
    .then((response) => {
    return response.json();
    })
    .then((data) => {
        defaultData = { userProfile: data }
    });
}

let result = (state = defaultData, action) => {
  switch (action.type) {
    //   case CHANGE_BUTTON:
    //           let value;
    //           if (localStorage.getItem('token') !== null) {
    //             value = true;
    //           } else {
    //             value = false;
    //           }

    //           localStorage.setItem('isLog', JSON.stringify({ isLog: value }));
    //           return ({
    //             ...state,
    //             isLog: value
    //           });
      default:
          return state;
  }
};

export default result;