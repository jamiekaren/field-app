// import dependences and data
import React, { Component } from "react";
import Media from "../media/media.json";
import WashHands from "../media/lesson2/wash-hands.jpg";
// import Lessons from "./Lessons/Lessons";
// import Slideshow from "../components/Slideshow/index.js";

// import API from "./src/utils/API.js";


class Trainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Media: Media[0],
      currentLesson: "",
      Wash: WashHands,
      showComponent: false,
      showing: true,
      lessonArray: ["../../media/lesson1/brush11.jpg", "../../media/lesson1/brush12.jpg"]
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  // componentDidMount() {
  //   // this.loadCurrentLesson();
  // }

  //  componentDidMount(){
  //    console.log("Our json", Media);
  //  };
  renderSlideshow() {
    
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    const { showing } = this.state;
    return (
      <React.Fragment>

        <div className="container-fluid">
          <element className="groupLesson post">
          {this.state.showComponent  ?
          
         this.renderSlideshow()
               :
               <div>
                <card>
               <img
               onClick={this._onButtonClick}
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
            </div>
              }

          </element>
          <div className="container home row align-items-center justify-content-between"></div>

        </div>

      </React.Fragment>
    );
  }
}

export default Trainer;