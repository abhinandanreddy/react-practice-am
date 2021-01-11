import React, { Component } from "react";
import ReactDom from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import "./style.css";

import NavItemsService from "./services/nav-items-service";

import { SendUserLoginApiRequestAction } from "./store/login-store/user-login-actions";
import UserLoginReducer from "./store/login-store/user-login-reducer";
import store from "./store/login-store/user-login-store";

import AppThemeContext from "./common/app-contexts";
import HeaderComponent from "./header/header-component";
import AdminLoginComponent from "./login/admin-login-component";
import UserLoginComponent from "./login/user-login-component";
import UserSelection from "./user-details/user-selection";
import PracticeComponent from "./practice-component/practice-component";
import FirstComponent from "./life-cycle-events/first.component";

class AppComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      navItems: []
    };
  }

  static contextType = AppThemeContext;

  componentDidMount() {
    NavItemsService().then(navItems => {
      //console.log(navItems);
      this.setState({
        navItems
      });
    });
  }

  subscriber = store.subscribe(val => {
    //console.log('from app component store listener';
    //const state = store.getState();
    //console.log(this.props.history);
  });

  componentWillUnmount() {
    subscriber.unsubscribe();
  }

  render() {
    return (
      <div id="app-component">
        <AppThemeContext.Provider value="dark">
          <BrowserRouter>
            <HeaderComponent navItems={this.state.navItems} />

            <Switch>
              <Route path="/" exact strict>
                <UserLoginComponent />
              </Route>

              <Route path="/basicUser" exact strict>
                <UserLoginComponent />
              </Route>

              <Route path="/admin" exact strict>
                <AdminLoginComponent />
              </Route>

              <Route path="/users" exact strict>
                <UserSelection name={this.props.saveUserCreds.username} />
              </Route>

              <Route path="/practice" exact strict>
                <PracticeComponent />
              </Route>

              <Route path="/lifeCycleMethods" exact strict>
                <FirstComponent />
              </Route>
            </Switch>
          </BrowserRouter>
        </AppThemeContext.Provider>
      </div>
    );
  }
}

const mapUserLoginStateToProps = store => {
  return {
    saveUserCreds: store.UserLoginReducer
  };
};

const mapUserLoginDispatchToProps = dispatch => {
  return {
    sendLoginRequestToApi: userCreds =>
      dispatch(SendUserLoginApiRequestAction(userCreds))
  };
};

export default connect(
  mapUserLoginStateToProps,
  mapUserLoginDispatchToProps
)(AppComponent);
