import React, { Component } from "react";
import { Menu, Icon, Modal, Input, Form, Button } from "semantic-ui-react";
import firebase from "../../firebase";
import { connect } from "react-redux";
import { setCurrentChannel, setPrivateChannel } from "../../actions/index";

class Channels extends Component {
  state = {
    user: this.props.user,
    channels: [],
    showModal: false,
    channelName: "",
    firstLoad: true,
    channelDetails: "",
    activeChannel: "",
    channelsRef: firebase.database().ref("channels"),
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  removeListeners() {
    this.state.channelsRef.off();
  }

  addListeners = () => {
    let loadedChannels = [];
    this.state.channelsRef.on("child_added", (snap) => {
      loadedChannels.push(snap.val());
      this.setState({ channels: loadedChannels }, () => this.setFirstChannel());
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    if (this.isFormValid(this.state)) {
      this.addChannel();
    }
  };

  isFormValid = ({ channelName, channelDetails }) => {
    return channelName.length && channelDetails.length;
  };

  addChannel = () => {
    const key = this.state.channelsRef.push().key;
    const newChannel = {
      id: key,
      name: this.state.channelName,
      details: this.state.channelDetails,
      createdBy: {
        name: this.state.user.displayName,
        photoURL: this.state.user.photoURL,
      },
    };

    this.state.channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelName: "", channelDetails: "" });
        this.closeModal();
      })
      .catch((err) => console.log(err));
  };

  changeChannel = (channel) => {
    this.props.setCurrentChannel(channel);
    this.setActiveChannel(channel);
  };

  setFirstChannel = () => {
    if (this.state.firstLoad && this.state.channels.length > 0) {
      this.setState({
        ...this.state,
        activeChannel: this.state.channels[0].id,
      });
      this.setActiveChannel(this.state.channels[0]);
      this.props.setCurrentChannel(this.state.channels[0]);
      this.setState({ ...this.state, firstLoad: false });
    }
  };

  setActiveChannel = (channel) => {
    this.setState({ ...this.state, activeChannel: channel.id });
  };

  displayChannels = () => {
    if (this.state.channels.length > 0) {
      return this.state.channels.map((channel) => (
        <Menu.Item
          name={channel.name}
          style={{ opacity: 0.7 }}
          key={channel.id}
          onClick={() => {
            console.log("change");
            this.changeChannel(channel);
          }}
          active={channel.id == this.state.activeChannel}
        >
          # {channel.name}
        </Menu.Item>
      ));
    }
  };

  render() {
    const { channels } = this.state;

    return (
      <React.Fragment>
        <Menu.Menu className="menu" style={{ textAlign: "center" }}>
          <br />

          <Menu.Item>
            <span>
              <Icon name="exchange"></Icon>
              CHANNELS{" "}
            </span>{" "}
            ({channels.length}) <Icon onClick={this.showModal} name="add" />
          </Menu.Item>
        </Menu.Menu>

        {this.displayChannels()}

        <Modal basic open={this.state.showModal} onClose={this.closeModal}>
          <Modal.Header>Add Channel</Modal.Header>
          <Modal.Content>
            <Form>
              <Input
                fluid
                label="Name Of Channel"
                name="channelName"
                onChange={this.handleChange}
                value={this.state.channelName}
              />
              <br />

              <Input
                fluid
                label="Description Of Channel"
                name="channelDetails"
                onChange={this.handleChange}
                value={this.state.channelDetails}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={this.handleSubmit}
              color="green"
              inverted
              style={{ marginBottom: "20px" }}
            >
              <Icon name="checkmark" />
              Add Channel
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" />
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
});

export default connect(mapStateToProps, {
  setCurrentChannel,
  setPrivateChannel,
})(Channels);
