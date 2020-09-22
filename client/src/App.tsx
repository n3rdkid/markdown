import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/SignInSignUp.pages";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
function App(props: any) {
  useEffect(() => {
    const { checkUserSession } = props;
    checkUserSession();
  }, []);

  return (
    <div className="App">
      <Header currentUser={{ id: "1" }} />
      <Switch>
        <Route exact path="/" component={SignInSignUp} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
          }
        />
        <Route
          exact
          path="/signup"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});
const mapDispatchToProps = (dispatch: any) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
