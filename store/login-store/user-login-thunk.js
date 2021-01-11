import LoginService from '../../services/login-service';
import {UserLoginApiRequestInProgress} from './user-login-actions';
import {UserLoginRequestApiResponseReceived} from './user-login-actions';

const UserLoginThunk = (url) => {
  return (dispatch, getState) => {
    dispatch(UserLoginApiRequestInProgress(true));
    LoginService(url).then( (response) => {
      dispatch(UserLoginRequestApiResponseReceived(true));
    });
  };
};

export default UserLoginThunk;