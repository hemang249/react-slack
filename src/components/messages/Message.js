import React from "react";
import { Comment } from "semantic-ui-react";
import moment from "moment";

export default function Message(props) {
  const isOwnMessage = (message, user) => user.uid === message.user.id;

  const timeFromNow = (time) => moment(time).fromNow();

  return (
    <Comment>
      <Comment.Avatar src={props.message.user.photoURL} />
      <Comment.Content
        className={
          isOwnMessage(props.message, props.user) ? "message__self" : ""
        }
      >
        <Comment.Author as="a">{props.message.user.displayName}</Comment.Author>
        <Comment.Metadata>
          {timeFromNow(props.message.timestamp)}
        </Comment.Metadata>
        <Comment.Text>{props.message.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}
