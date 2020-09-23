import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";
import "./header.styles.scss";

const Header: React.FC<any> = (props: any) => {
  const { currentUser, handleSignOut } = props;
  return (
    <div className="header">
      <div className="logo"> Markdown</div>
      <nav className="links">
        {currentUser?.id ? (
          <button className="link" onClick={handleSignOut}>
            {" "}
            Sign out{" "}
          </button>
        ) : (
          <button className="link">
            {" "}
            <Link to="/signin">Sign in</Link>{" "}
          </button>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch: any) => ({
  handleSignOut: () => dispatch(signOutStart()),
});
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Header));
