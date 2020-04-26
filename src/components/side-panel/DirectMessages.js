import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import firebase from "../../firebase";

class DirectMessages extends Component {
  state = {
    users: [],
    currentUser: null,
    usersRef: firebase.database().ref("users"),
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, currentUser: nextProps.currentUser });
    this.addListeners(this.state.currentUser.uid);
  }

  addListeners = (uid) => {
    let loadedUsers = [];
    this.state.usersRef.on("child_added", (snap) => {});
  };

  render() {
    const { users } = this.state;
    return (
      <Menu.Menu className="menu">
        <Menu.Item>
          <span>
            <Icon name="mail" /> DIRECT MESSAGES {users.length}
          </span>
        </Menu.Item>
      </Menu.Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, {})(DirectMessages);
