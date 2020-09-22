import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./header.styles.scss";

const Header: React.FC<any> = (props: any) => {
  const { currentUser } = props;
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default React.memo(connect(mapStateToProps)(Header));
