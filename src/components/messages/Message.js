import React, { useState } from "react";
import { Comment, Image } from "semantic-ui-react";
import moment from "moment";
import { connect } from "react-redux";

function Message(props) {
  const [user, setUser] = useState(props.currentUser);

  const timeFromNow = (time) => moment(time).fromNow();

  const isImage = (message) => {
    return (
      message.hasOwnProperty("image") && !message.hasOwnProperty("content")
    );
  };

  return (
    <Comment>
      <Comment.Avatar src={props.message.user.photoURL} />
      <Comment.Content>
        <Comment.Author as="a">{props.message.user.displayName}</Comment.Author>
        <Comment.Metadata>
          {timeFromNow(props.message.timestamp)}
        </Comment.Metadata>

        {isImage(props.message) ? (
          <Image src={props.message.image} />
        ) : (
          <Comment.Text>{props.message.content}</Comment.Text>
        )}
      </Comment.Content>
    </Comment>
  );
}

const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};

export default connect()(Message);
