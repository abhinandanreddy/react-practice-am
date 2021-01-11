import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {SaveLoginCredsAction} from '../store/login-store/user-login-actions';
import UserLoginThunk from '../store/login-store/user-login-thunk';
import store from '../store/login-store/user-login-store';

import {LOGIN_FORM_STYLES} from '../common/styles';
import LoadingComponent from '../common/loading-component';

class UserLoginComponent extends Component{

  constructor(props){
    super();

    this.state = {
      userName: '',
      password: ''
    }
  }

  onKeyUpHandler = (event) => {
    if(event.keyCode === 13){
      switch (event.target.name){
        case 'username':
         this.passwordAnchor.focus();
         break;

        case 'password':
        this.submitAnchor.focus();
        break;

        default:
        this.firstNameAnchor.focus();
        break;

      }
    }
  };
   
  onChangeHandler = (event) => {
    if(event.target.id === 'username'){
      this.setState({
        username: event.target.value
      });
    } else{
      this.setState({
        password: event.target.value
      })
    }
  };

  updateStore = (event) => {
    //console.log("submit method called");
    event.preventDefault();
    store.dispatch(UserLoginThunk('xyz'));
  };

  subscriber = store.subscribe( (val) => {
    console.log('from user login store listener', store.getState());
  });

  componentWillUnmount(){
    console.log('component unmounted: UserLoginComponent', this.subscriber)
    this.subscriber.unsubscribe;
  }

  render(){
    return (
      <form style={LOGIN_FORM_STYLES.form} onSubmit= {this.updateStore}>
        <section className="form__item">
          <label htmlFor="username">User name</label>
          <input type="text" id="username" name="username" autoComplete="off" onChange= {this.onChangeHandler} ref={(elemAnchor) => this.firstNameAnchor = elemAnchor } onKeyUp={this.onKeyUpHandler}/>
        </section>

        <section className="form__item">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" autoComplete="off" onChange= {this.onChangeHandler} ref={(elemAnchor) => this.passwordAnchor = elemAnchor} onKeyUp={this.onKeyUpHandler}/>
        </section>

        <section className="form__item">
          <button type="submit" ref={(submitAnchor) => {this.submitAnchor = submitAnchor}}> login user</button>

          {this.props.loginProcessState.isUserLoginInProgress ? (<LoadingComponent />) : ''}
        </section>
      </form>
  );
 }
}

UserLoginComponent.propTypes = {
loginProcessState: PropTypes.object
};

const matchPropsToState = (store) => {
  return {
    loginProcessState: store.UserLoginReducer
  };
};

export default connect(matchPropsToState, {})(UserLoginComponent);