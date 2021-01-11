import React, { useState, useEffect, lazy, Suspense } from "react";
import PropTypes from "prop-types";

import AppThemeContext from "../common/app-contexts";
import UsersService from "../services/users-service";
import UserDetails from "./user-details";

/* const UserDetails = lazy( () => import('./user-details')); */

const UserSelection = props => {
  const [userSelected, setSelectedUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UsersService.then(users => {
      setUsers(users);
      setSelectedUser(users[0]);
    });
  }, []);

  const userSelectedHandler = event => {
    setSelectedUser(event.target.value);
  };

  return (
    <div>
      <section>
        <label htmlFor="users">select user</label>
        <select id="users" name="users" onChange={userSelectedHandler}>
          {users ? (
            users.map(val => {
              return <option key={val}> {val}</option>;
            })
          ) : (
            <option key="..loading"> ...Loading</option>
          )}
        </select>
      </section>

      <br />

      <Suspense fallback={<div> ...loading</div>}>
        <section>
          <UserDetails userSelected={userSelected} />
        </section>
      </Suspense>

      <br />

      <div>{props.name}</div>
      <AppThemeContext.Consumer>
        {value => <div> {value} </div>}
      </AppThemeContext.Consumer>
    </div>
  );
};

UserSelection.propTypes = {
  name: PropTypes.string
};

export default UserSelection;
