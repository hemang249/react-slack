import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import firebase from "../../firebase";
import { connect } from "react-redux";
import Message from "./Message";

class Messages extends React.Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
    currentChannel: null,
    messages: [],
    messagesLoading: true,
    user: null,
  };

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        ...this.state,
        user: nextProps.user,
        currentChannel: nextProps.currentChannel,
      },
      () => {
        const { currentChannel, user } = this.state;
        if (currentChannel && user) {
          this.addListeners(currentChannel.id);
        }
      }
    );
  }

  addListeners = (channelId) => {
    this.addMessageListener(channelId);
  };

  addMessageListener = (channelId) => {
    let loadedMessages = [];
    this.state.messagesRef.child(channelId).on("child_added", (snap) => {
      loadedMessages.push(snap.val());
      this.setState({
        ...this.state,
        messages: loadedMessages,
        messagesLoading: false,
      });
    });
  };

  displayMessages = (messages) => {
    return (
      messages.length > 0 &&
      messages.map((m) => (
        <Message key={m.timestamp} message={m} user={this.state.user} />
      ))
    );
  };

  render() {
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(this.state.messages)}
          </Comment.Group>
        </Segment>
        <MessageForm messagesRef={this.state.messagesRef} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
});

export default connect(mapStateToProps, {})(Messages);
