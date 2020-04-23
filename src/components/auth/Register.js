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

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    loading: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ errors: [], loading: true });
    if (this.isFormValid()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
          this.setState({ loading: false });
        })
        .catch((err) => {
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false,
          });
          console.log(err);
        });
    }
  };

  isFormValid = () => {
    if (this.isFormEmpty(this.state)) {
      this.setState({
        errors: this.state.errors.concat({
          message: "Please fillout all fields",
        }),
      });
    } else if (
      !this.isPasswordValid(
        this.state.password,
        this.state.passwordConfirmation
      )
    ) {
    } else {
      return true;
    }
  };

  isFormEmpty = ({ email, username, password, passwordConfirmation }) => {
    return (
      !password.length ||
      !passwordConfirmation.length ||
      !username.length ||
      !email.length
    );
  };

  isPasswordValid = (password, passwordConfirmation) => {
    if (password.length < 6) {
      this.setState({
        errors: this.state.errors.concat({
          message: "Password must be 6 characters long",
        }),
      });
      return false;
    } else if (password !== passwordConfirmation) {
      this.setState({
        errors: this.state.errors.concat({ message: "Passwords donot match" }),
      });
      return false;
    } else {
      return true;
    }
  };

  showErrors = () => {
    return this.state.errors.map((err, i) => <p key={i}>{err.message}</p>);
  };

  render() {
    const {
      username,
      email,
      password,
      passwordConfirmation,
      loading,
    } = this.state;
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: "450px" }}>
          <Header as="h4" icon color="blue" textAlign="center">
            <Icon name="comment outline" color="blue">
              {" "}
              <br />
              Register for Klack
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
                name="username"
                value={username}
                icon="user"
                iconPosition="left"
                placeholder="Username"
                type="text"
                onChange={this.handleChange}
              ></Form.Input>
              <Form.Input
                fluid
                name="email"
                value={email}
                icon="envelope"
                iconPosition="left"
                placeholder="Email"
                type="text"
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
              <Form.Input
                fluid
                value={passwordConfirmation}
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              ></Form.Input>

              <Button
                disabled={loading}
                className={loading ? "loading" : ""}
                color="blue"
                fluid
                size="large"
              >
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Already A User ? <Link to="/login">Login Here</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
