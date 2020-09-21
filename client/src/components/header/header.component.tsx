import React from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";
export interface IHeader {
  //
  currentUser: {
    id: string;
  } | null;
}
const Header: React.FC<IHeader> = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="logo"> Markdown</div>
      <nav className="links">
        {currentUser?.id ? (
          <NavLink className="link" to="/signout">
            Sign Out
          </NavLink>
        ) : (
          <NavLink className="link" to="/signin">
            {" "}
            Sign in{" "}
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
