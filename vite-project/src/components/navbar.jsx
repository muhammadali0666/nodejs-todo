import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <ul className="nav nav-pills todo-nav">
        <li role="presentation" className="nav-item all-task active">
          <NavLink className="nav-link" to="/">
            All
          </NavLink>
        </li>
        <li role="presentation" className="nav-item active-task">
          <NavLink className="nav-link" to="/active">
            Active
          </NavLink>
        </li>
        <li role="presentation" className="nav-item completed-task">
          <NavLink className="nav-link" to="/complete">
            Complete
          </NavLink>
        </li>
      </ul>
    </>
  );
};
