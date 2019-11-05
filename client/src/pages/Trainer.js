// import dependences and data
import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import WashHands1 from '../media/wash-hands.jpg';
import WashHands2 from '../media/brush11.jpg';
import WashHands3 from '../media/wash-hands.jpg';



// const lessonOne = [Brush, Brush2];
const lessonTwo = [WashHands1, WashHands2, WashHands3];
// const lessonThree = [Brush, Brush2];


class Trainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLesson: [...lessonTwo],
      allLessons: [lessonTwo],
      showComponent: false,
      showing: true,
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
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  // renderSlideshow() {
  //   <div className="slide-container">
  //     <Slide {...this.state.properties}>
  //       {this.state.currentLesson.map(image =>
  //         <div key="" className="each-slide">
  //           <div style={{ 'backgroundImage': `url(${image})` }}>
  //           </div>
  //         </div>
  //       )}

  //     </Slide>
  //   </div>
  // }

  _onButtonClick() {

    

    this.setState({
      showComponent: true,
    });
  }

  render = () => {
    const { showing } = this.state; 
    return (
      <React.Fragment>

        <div className="container-fluid">
          <element className="groupLesson post">
            {this.state.showComponent ?

              <div className="slide-container">
                <Slide {...this.state.properties}>
                  {this.state.currentLesson.map(image =>
                    <div key="" className="each-slide">
                      <div style={{ 'backgroundImage': `url(${image})` }}>
                      </div>
                    </div>
                  )}

                </Slide>
              </div>

              // this.renderSlideshow()
              :
              <div>
                <card>
                  <img
                    onClick={this._onButtonClick}
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
                    src={WashHands3}
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