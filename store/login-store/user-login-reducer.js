const InitialState = {
  username: 'abhi',
  password: '',
  isUserLoggedIn: false,
  isUserLoginInProgress: false
}

const UserLoginReducer = (state = InitialState, action) => {
  switch(action.type){
    case 'saveLoginCreds': {
      return Object.assign({}, ...state, {
        username: action.payload.username,
        password: action.payload.password
      });
      break;
    }

    case 'userLoginApiRequestInProgress': {
      console.log('sendUserLoginApiRequest called', action);
      return Object.assign({}, ...state, {
          isUserLoginInProgress: true
        });
    }

    case 'userLoginRequestApiResponseReceived':{
      return Object.assign({}, ...state, {
          isUserLoggedIn: action.payload,
          isUserLoginInProgress: false
        });
    }

    default: 
      return InitialState;
    break;
  }
}

export default UserLoginReducer;