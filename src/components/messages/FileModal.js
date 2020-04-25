import React, { Component } from "react";
import { Modal, Input, Button, Icon } from "semantic-ui-react";
import mime from "mime-types";
import { connect } from "react-redux";
import firebase from "../../firebase";
import uuidv4 from "uuid/v4";

class FileModal extends Component {
  state = {
    file: null,
    permittedTypes: ["image/jpeg", "image/png", "image/jpg"],
    user: null,
    percentUploaded: 0,
    currentChannel: null,
    storageRef: firebase.storage().ref(),
    messgesRef: firebase.database().ref("messages"),
    uploadState: "",
    uploadTask: "",
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      user: nextProps.user,
      currentChannel: nextProps.currentChannel,
    });
  }

  addFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ ...this.state, file: file });
    }
  };

  sendFile = () => {
    const { file } = this.state;
    if (file) {
      if (this.isPermitted(file.name)) {
        const metaData = { contentType: mime.lookup(file.name) };
        this.uploadFile(file, metaData);
      }
    }
  };

  clearFile = () => {
    this.setState({ ...this.state, file: null });
  };

  uploadFile = (file, metaData) => {
    const pathToUpload = this.state.currentChannel.id;
    const ref = this.state.messgesRef;
    const filePath = `chat/public${uuidv4()}.jpg`;

    this.setState(
      {
        ...this.state,
        uploadState: "uploading",
        uploadTask: this.state.storageRef.child(filePath).put(file, metaData),
      },
      () => {
        this.state.uploadTask.on(
          "state_changed",
          (snap) => {
            const percentUploaded = Math.round(
              (snap.bytesTransferred / snap.totalBytes) * 100
            );
            this.setState({ percentUploaded });
          },
          (err) => console.log(err),
          () => {
            this.props.closeModal();
            this.state.uploadTask.snapshot.ref
              .getDownloadURL()
              .then((url) =>
                this.props.sendFileMessage(url, ref, pathToUpload)
              );
          }
        );
      }
    );
  };

  isPermitted = (fileName) =>
    this.state.permittedTypes.includes(mime.lookup(fileName));

  render() {
    return (
      <Modal basic open={this.props.modal} close={this.props.closeModal}>
        <Modal.Header>Select File</Modal.Header>
        <Modal.Content>
          <Input
            onChange={this.addFile}
            fluid
            label="file types : jpg / png"
            name="file"
            type="file"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.sendFile} inverted>
            {" "}
            <Icon name="checkmark" />
            Upload
          </Button>
          <Button color="red" onClick={this.props.closeModal} inverted>
            {" "}
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  currentChannel: state.channel.currentChannel,
  user: state.user.currentUser,
});

export default connect(mapStateToProps, {})(FileModal);
