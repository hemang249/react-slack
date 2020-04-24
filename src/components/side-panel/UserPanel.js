import React, { Component } from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";
import firebase from "../../firebase";
import { connect } from "react-redux";

class UserPanel extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({ user: this.props.currentUser });
  }

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("Signout"))
      .catch((err) => console.log(err));
  };

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed In as{" "}
          <strong>{this.state.user && this.state.user.dislayName}</strong>{" "}
        </span>
      ),
    },

    {
      key: "avatar",
      text: <span> Change Avatar</span>,
    },

    {
      key: "signout",
      text: <span onClick={this.handleSignout}>Sign out</span>,
    },
  ];

  render() {
    console.log(this.state.user);
    return (
      <Grid style={{ background: "#0A79DF" }}>
        <Grid.Column>
          <Grid.Row style={{ paddingTop: "1.2em", margin: "0px" }}>
            <Header style={{ color: "white", textAlign: "center" }}>
              <Header.Content inverted float="left" as="h2">
                <Icon name="code"></Icon>
                Klack
              </Header.Content>
            </Header>
          </Grid.Row>

          <Header style={{ padding: "0.24em" }} inverted as="h4">
            <Dropdown
              trigger={<span>User</span>}
              options={this.dropdownOptions()}
            />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, {})(UserPanel);
