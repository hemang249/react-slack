import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false,
    usersRef: firebase.database().ref("users"),
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ errors: [], loading: true });
    if (this.isFormValid(this.state)) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((signedInUser) => {
          this.setState({ loading: false });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false,
          });
        });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  saveUser = (createdUser) => {
    return this.state.usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL,
    });
  };

  showErrors = () => {
    return this.state.errors.map((err, i) => <p key={i}>{err.message}</p>);
  };

  render() {
    const { email, password, loading } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Header as="h4" icon color="blue" textAlign="center">
            <Icon name="code branch" color="violet">
              {" "}
              <br />
              Login for Klack
            </Icon>
          </Header>
          {this.state.errors.length > 0 && (
            <Message color="red">
              <h4>Errors</h4>
              {this.showErrors()}
            </Message>
          )}
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                name="email"
                value={email}
                icon="envelope"
                iconPosition="left"
                placeholder="Email"
                type="email"
                onChange={this.handleChange}
              ></Form.Input>
              <Form.Input
                fluid
                value={password}
                name="password"
                icon="key"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              ></Form.Input>

              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="violet"
                fluid
                size="large"
              >
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            New User? <Link to="/register">Register Here</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
