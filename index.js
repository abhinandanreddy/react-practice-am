import React from 'react';
import ReactDom from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import store from './store/login-store/user-login-store';

import AppComponent from './app-component';


ReactDom.render(
  <Provider store={store}>
    <AppComponent/>
  </Provider>, 
  document.getElementById('root')
);

 /* ReactDom.render(
    <AppComponent/>, document.getElementById('root')
);  */