import React from "react";
import "./App.css";
import { Grid } from "semantic-ui-react";
import Messages from "./messages/Messages";
import ColorPanel from "./color-panel/ColorPanel";
import SidePanel from "./side-panel/SidePanel";
import MetaPanel from "./meta-panel/MetaPanel";
import { connect } from "react-redux";

function App(props) {
  return (
    <Grid columns="equal" className="app" style={{ background: "#eee" }}>
      <ColorPanel />
      <SidePanel currentUser={props.currentUser} />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>

      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(App);
