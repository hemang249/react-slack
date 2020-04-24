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
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import { setUser, clearUser } from "../actions/index";
import Spinner from "../Spinner";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/");
      } else {
        this.props.clearUser();

        this.props.history.push("/login");
      }
    });
  }

  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
});

const RoutesWithAuth = withRouter(
  connect(mapStateToProps, { setUser, clearUser })(Root)
);

class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <RoutesWithAuth />
        </Router>
      </Provider>
    );
  }
}

export default Routes;
