import React from "react";

import { Link } from "react-router-dom";

const HeaderComponent = props => {
  var navItems = props.navItems;
  return (
    <nav>
      <ul className="app-header">
        {props.navItems.map(navItem => {
          return (
            <li key={navItem.name}>
              <Link to={navItem.path}>{navItem.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderComponent;
