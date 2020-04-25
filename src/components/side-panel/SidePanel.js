import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";

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
      </Menu>
    );
  }
}

export default SidePanel;
