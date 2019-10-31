// import dependences and data
import React, { Component } from "react";
// import Media from "../media/media.json";
import WashHands from "../media/wash-hands.jpg";
// import API from "./src/utils/API.js";
class Trainer extends Component {
  state = {
    // Meda: [...Media],
    currentLesson: false
  };
  // componentDidMount() {
  //   // this.loadCurrentLesson();
  // }
  handleHardClick = image => {
    console.log(image)
  };
  render() {
    return (
      <React.Fragment>
        
        <nav className="navbar navbar-dark bg-success class d-flex justify-space-between">
          <span className="navbar-brand mb-0">Field App PRO</span>
        </nav>
        <div className="jumbotron jumbotron-fluid bg-primary text-white text-center">
          <h1>Welcome Trainer!</h1>
        </div>
        <div className="container-fluid">
          <element className="groupLesson post">
            <card>
              <img
                onClick={(image) => this.handleHardClick(image) }
                className="imageHand"
                src={WashHands}
                alt="WashingHands"
                style={{
                  width: 200,
                  height: 200,
                  position: "right",
                  bottom: this.props.bottom
                }}
              />
            </card>
            <card>
              <img
                onClick=""
                className="imageHand"
                src={WashHands}
                alt="WashingHands"
                style={{
                  width: 200,
                  height: 200,
                  position: "left",
                  bottom: this.props.bottom
                }}
              />
            </card>
            <card>
              <img
                onClick=""
                className="imageHand"
                src={WashHands}
                alt="WashingHands"
                style={{
                  width: 200,
                  height: 200,
                  position: "relative",
                  bottom: this.props.bottom
                }}
              />
            </card>
          </element>
          <div className="container home row align-items-center justify-content-between"></div>
        </div>
      </React.Fragment>
    );
  }
}
// export Clicky component
export default Trainer;
