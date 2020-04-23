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
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;
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
                placeholder="password"
                type="pasword"
                onChange={this.handleChange}
              ></Form.Input>

              <Button color="blue" fluid size="large">
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
