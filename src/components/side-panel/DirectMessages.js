import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { setCurrentChannel, setPrivateChannel } from "../../actions";
import { connect } from "react-redux";
import firebase from "../../firebase";

class DirectMessages extends Component {
  state = {
    users: [],
    currentUser: this.props.currentUser,
    usersRef: firebase.database().ref("users"),
    connectedRef: firebase.database().ref(".info/connected"),
    presenceRef: firebase.database().ref("presence"),
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({ ...this.state, currentUser: this.props.currentUser });
    this.addListeners(this.state.currentUser.uid);
  }

  addListeners = (uid) => {
    let loadedUsers = [];
    this.state.usersRef.on("child_added", (snap) => {
      if (uid !== snap.key) {
        let user = snap.val();
        user["uid"] = snap.key;
        user["status"] = "offline";
        loadedUsers.push(user);
        this.setState({ users: loadedUsers });
      }
    });

    this.state.connectedRef.on("value", (snap) => {
      if (snap.val() === true) {
        this.state.presenceRef.child(uid).set(true);
      }
    });

    this.state.presenceRef.on("child_added", (snap) => {
      if (uid !== snap.key) {
        this.addStatusToUser(snap.key, true);
      }
    });

    this.state.presenceRef.on("child_removed", (snap) => {
      if (uid !== snap.key) {
        this.addStatusToUser(snap.key, false);
      }
    });
  };

  addStatusToUser = (uid, connected) => {
    const updatedUsers = this.state.users.reduce((acc, user) => {
      if (user.uid === uid) {
        user["status"] = connected ? "online" : "offline";
      }
      return acc.concat(user);
    }, []);

    this.setState({ users: updatedUsers });
  };

  changeChannel = (user) => {
    const channelId = this.getChannelId(user.uid);
    const channelData = {
      id: channelId,
      name: user.name,
    };

    this.props.setCurrentChannel(channelData);
    this.props.setPrivateChannel(true);
  };

  getChannelId = (uid) => {
    const currentUserId = this.state.currentUser.uid;
    return uid < currentUserId
      ? `${uid}/${currentUserId}`
      : `${currentUserId}/${uid}`;
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
        {this.state.users.map((u) => (
          <Menu.Item
            key={u.uid}
            onClick={() => {
              this.changeChannel(u);
            }}
          >
            <Icon
              name="circle"
              color={u.status === "online" ? "green" : "red"}
            />{" "}
            {u.name}
          </Menu.Item>
        ))}
      </Menu.Menu>
    );
  }
}

export default connect(null, { setCurrentChannel, setPrivateChannel })(
  DirectMessages
);
