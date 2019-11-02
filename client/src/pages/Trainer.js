// import dependences and data
import React, { Component } from "react";
import Media from "../media/media.json";
import WashHands from "../media/wash-hands.jpg";
import Lessons from "./Lessons/Lessons";

// import API from "./src/utils/API.js";

class Trainer extends Component {
  state = {
    Media: Media[0],
    currentLesson: "",
    Wash: WashHands,
    lessonArray: ["../../media/brush11.jpg", "../../media/brush12.jpg"]
  };
  // componentDidMount() {
  //   // this.loadCurrentLesson();
  // }

  //  componentDidMount(){
  //    console.log("Our json", Media);
  //  };

  handleHardClick = image => {
    console.log(image);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <element className="groupLesson post">
            <card>
              <img
                onClick={image => this.handleHardClick(image)}
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

          <Lessons />
        </div>
      </React.Fragment>
    );
  }
}

// export Clicky component
export default Trainer;
