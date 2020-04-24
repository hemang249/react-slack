import React, { Component } from "react";
import { Menu, Icon, Modal, Input, Form, Button } from "semantic-ui-react";

export default class Channels extends Component {
  state = {
    channels: [],
    showModal: false,
    channelName: "",
    channelDetails: "",
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

  render() {
    const { channels } = this.state;

    return (
      <React.Fragment>
        <Menu.Menu style={{ textAlign: "center" }}>
          <br />

          <Menu.Item>
            <span>
              <Icon name="exchange"></Icon>
              CHANNELS{" "}
            </span>{" "}
            ({channels.length}) <Icon onClick={this.showModal} name="add" />
          </Menu.Item>
        </Menu.Menu>

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
            <Button color="green" inverted style={{ marginBottom: "20px" }}>
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
