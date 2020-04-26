import React, { Component } from "react";
import { Header, Button, Segment, Icon, Input } from "semantic-ui-react";
import { connect } from "react-redux";

class MessagesHeader extends Component {
  state = {
    currentChannel: "",
    searchText: "",
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, currentChannel: nextProps.currentChannel });
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Segment clearing>
          <Header
            fluid="true"
            as="h2"
            floated="left"
            style={{ marginBottom: 0 }}
          >
            <span>
              {this.state.currentChannel &&
                this.state.currentChannel.name.toUpperCase()}
              <Icon name="star outline" color="black" />
            </span>
          </Header>
          <Header floated="right">
            <Input
              size="mini"
              icon="search"
              name="searchText"
              placeholder="search messages"
              onChange={this.handleChange}
            ></Input>
            <br />
            <Button
              color="green"
              onClick={() => {
                this.props.searchMessages(this.state.searchText);
              }}
            >
              {" "}
              Search{" "}
            </Button>
          </Header>
        </Segment>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentChannel: state.channel.currentChannel,
});

export default connect(mapStateToProps, {})(MessagesHeader);
