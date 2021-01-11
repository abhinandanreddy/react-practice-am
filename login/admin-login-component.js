import React, {Component} from 'react';

import {LOGIN_FORM_STYLES} from '../common/styles';

class AdminLoginComponent extends Component{

  constructor(){
    super();
  }

  render(){
    return (
      <form style={LOGIN_FORM_STYLES.form}>
        <section className="form__item">
          <label htmlFor="adminname">Admin name</label>
          <input type="text" id="adminname" name="adminname" autoComplete="off"/>
        </section>

        <section className="form__item">
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" autoComplete="off"/>
        </section>

        <section className="form__item">
          <button type="submit"> login user</button>
        </section>
      </form>
  );
 }
}

export default AdminLoginComponent;