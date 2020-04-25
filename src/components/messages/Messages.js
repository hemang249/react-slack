import React from "react";
import { Segment, Comment, Message } from "semantic-ui-react";
import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import firebase from "../../firebase";

class Messages extends React.Component {
  state = {
    messagesRef: firebase.database().ref("messages"),
  };
  render() {
    return (
      <React.Fragment>
        <MessagesHeader />
        <Segment>
          <Comment.Group className="messages"></Comment.Group>
        </Segment>
        <MessageForm messagesRef={this.state.messagesRef} />
      </React.Fragment>
    );
  }
}

export default Messages;
