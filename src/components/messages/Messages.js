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
    isPrivateChannel: this.props.isPrivateChannel,
    uniqueUsers: 0,
    searching: false,
    privateMessagesRef: firebase.database().ref("privateMessages"),
    searchMessages: [],
  };

  componentWillUnmount() {
    this.state.messagesRef.off();
  }

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
    const ref = this.getMessagesRef();
    ref.child(channelId).on("child_added", (snap) => {
      loadedMessages.push(snap.val());
      this.setState({
        ...this.state,
        messages: loadedMessages,
        messagesLoading: false,
      });
    });
  };

  searchMessages = (searchText) => {
    const searchMessages = [];
    if (searchText != "") {
      this.state.messages.map((m) => {
        if (m.content) {
          if (m.content.includes(searchText)) {
            searchMessages.push(m);
          }
        }
      });
      this.setState({
        ...this.state,
        searchMessages: searchMessages,
        searching: true,
      });
    } else {
      this.setState({ ...this.state, searching: false });
    }
  };

  getMessagesRef = () => {
    const { messagesRef, privateMessagesRef, isPrivateChannel } = this.state;
    return isPrivateChannel ? privateMessagesRef : messagesRef;
  };

  displaySearchMessages = () => {
    const { searchMessages } = this.state;
    return searchMessages.length > 0 ? (
      searchMessages.map((m) => (
        <Message key={m.timestamp} message={m} user={this.state.user} />
      ))
    ) : (
      <div>Cannot find such a message</div>
    );
  };

  displayMessages = (messages, channel) => {
    return messages.length > 0 ? (
      messages.map((m) => (
        <Message key={m.timestamp} message={m} user={this.state.user} />
      ))
    ) : (
      <div>This is the beginning of Channel</div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <MessagesHeader
          searchMessages={this.searchMessages}
          uniqueUsers={this.state.uniqueUsers}
        />
        <Segment>
          <Comment.Group className="messages">
            {this.state.searching
              ? this.displaySearchMessages()
              : this.displayMessages(
                  this.state.messages,
                  this.state.currentChannel
                )}
          </Comment.Group>
        </Segment>
        <MessageForm
          messagesRef={this.state.messagesRef}
          getMessagesRef={this.getMessagesRef}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
});

export default connect(mapStateToProps, {})(Messages);
