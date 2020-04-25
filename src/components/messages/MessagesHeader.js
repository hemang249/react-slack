import React, { Component } from "react";
import { Header, Segment, Icon, Input } from "semantic-ui-react";
import { connect } from "react-redux";

class MessagesHeader extends Component {
  state = {
    currentChannel: "",
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, currentChannel: nextProps.currentChannel });
  }

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

            <Header.Subheader>2 Users</Header.Subheader>
          </Header>
          <Header floated="right">
            <Input
              size="mini"
              icon="search"
              name="searchTerm"
              placeholder="search messages"
            ></Input>
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
