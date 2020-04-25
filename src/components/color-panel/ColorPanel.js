import React from "react";
import { Sidebar, Divider, Menu, Button } from "semantic-ui-react";

class ColorPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar
          as={Menu}
          icon="labelled"
          inverted
          vertical
          visible
          width="very thin"
        >
          <Divider />
          <Button icon="add" size="small" color="blue"></Button>
        </Sidebar>
      </React.Fragment>
    );
  }
}

export default ColorPanel;
