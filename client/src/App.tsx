import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/SignInSignUp.pages";
function App(props: any) {
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

export default App;
