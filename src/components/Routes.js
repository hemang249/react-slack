import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import App from "./App";
import Login from "./auth/Login";
import Register from "./auth/Register";
import "semantic-ui-css/semantic.min.css";
import firebase from "../firebase";

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    );
  }
}

const RoutesWithAuth = withRouter(Root);

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <RoutesWithAuth />
      </Router>
    );
  }
}

export default Routes;
