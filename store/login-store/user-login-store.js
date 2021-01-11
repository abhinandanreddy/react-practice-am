import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import UserLoginReducer from './user-login-reducer';

const store = createStore(combineReducers({UserLoginReducer}), applyMiddleware(thunk) );

export default store;