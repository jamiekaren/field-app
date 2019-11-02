// import dependences and data
import React, { Component } from "react";
// import Lessons from "./Lessons/Lessons";
import WashHands1 from '../media/wash-hands.jpg';
import WashHands2 from '../media/wash-hands.jpg';
import { Slide } from 'react-slideshow-image';

// maybe make some global arrays here of each lesson using import?
// Then we'd have an array of arrays
// Add an id or class to each image with array name

// const lessonOne = [Brush, Brush2];
const lessonTwo = [WashHands1, WashHands2];
// const lessonThree = [Brush, Brush2];

class Trainer extends Component {
  state = {
    currentLesson: [...lessonTwo],
    // allLessons: [lessonOne,lessonTwo, lessonThree],
    clicked: "",
    properties: {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      autoplay: false,
      onChange: (oldIndex, newIndex) => {
          console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
  }

  };


  // if clicked matches on of the allLessons, set set as currentLesson array??

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
                onClick={(image) => this.handleHardClick(image)}
                className="imageHand"
                
                src={WashHands1}
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
                src={WashHands2}
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
                src={WashHands1}
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
          <div className="slide-container">
              <Slide {...this.state.properties}>

                  {this.state.currentLesson.map (image =>
                  <div key="" className="each-slide">
                      <div style={{ 'backgroundImage': `url(${image})` }}>
                      </div>
                  </div>
                  )}
                
              </Slide>
          </div>


        </div>

      </React.Fragment>
    );
  }
}

// export component
export default Trainer;