import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import { connect } from "react-redux";

class SidePanel extends React.Component {
  render() {
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#2B2B52", fontSize: "1.2rem" }}
      >
        <UserPanel />
        <Channels />
        <br />
        <br />
        {/* <DirectMessages currentUser={this.props.currentUser} /> */}
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, {})(SidePanel);
