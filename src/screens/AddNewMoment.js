import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Modal from "@material-ui/core/Modal";

import AddNewMomentModal from "./AddNewMomentModal";

class AddNewMoment extends Component {
  state = {
    openOptions: ""
  };

  onTakePhoto(dataUri) {
    // Do stuff with the dataUri photo...
    this.setState({ openOptions: dataUri });
    console.log("takePhoto", dataUri);
  }

  render() {
    return (
      <div className="App">
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openOptions}
          onClose={() => this.setState({ openOptions: "" })}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: 20
          }}
        >
          <AddNewMomentModal
            close={() => this.setState({ openOptions: "" })}
            image={this.state.openOptions}
          />
        </Modal>
        <Camera
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
        />
      </div>
    );
  }
}

export default AddNewMoment;
