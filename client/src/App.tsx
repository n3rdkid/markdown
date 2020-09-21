import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInPage from "./pages/SignIn.pages";
function App(props: any) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInPage />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
