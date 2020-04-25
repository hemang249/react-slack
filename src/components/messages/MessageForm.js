import React, { Component } from "react";
import { Segment, Input, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import firebase from "../../firebase";

class MessageForm extends Component {
  state = {
    user: this.props.currentUser,
    message: "",
    loading: false,
    currentChannel: this.props.currentChannel,
    errors: [],
    messagesRef: this.props.messagesRef,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, currentChannel: nextProps.currentChannel });
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  sendMessage = () => {
    const { messagesRef, message, currentChannel } = this.state;

    if (message.length > 0) {
      this.setState({ ...this.state, loading: true });
      messagesRef
        .child(currentChannel.id)
        .push()
        .set(this.createMessage())
        .then(() => {
          console.log("sent");
          this.setState({
            ...this.state,
            message: "",
            loading: false,
            errors: [],
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            ...this.state,
            loading: false,
            errors: this.state.errors.concat(err),
          });
        });
    }
  };

  createMessage = () => {
    const message = {
      content: this.state.message,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        displayName: this.state.user.displayName,
        photoURL: this.state.user.photoURL,
      },
    };
    return message;
  };

  render() {
    return (
      <React.Fragment>
        <Segment className="message__form">
          <Input
            fluid
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
            style={{ marginBottom: "0.7em" }}
            label={<Button icon="add"></Button>}
            labelPosition="left"
            className={
              this.state.errors.some((err) => err.includes("message"))
                ? "error"
                : ""
            }
          />
          <Button.Group icons widths="2">
            <Button
              disabled={this.state.loading}
              onClick={this.sendMessage}
              color="orange"
              icon="edit"
              content="reply"
              labelPosition="left"
            />
            <Button
              color="green"
              content="upload media"
              icon="cloud upload"
              labelPosition="right"
            />
          </Button.Group>
        </Segment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentChannel: state.channel.currentChannel,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, {})(MessageForm);
