// import dependences and data
import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import Brush11 from '../media/lesson1/brush11.jpg';
import Brush1 from '../media/lesson1/brush5.jpg';
import Brush2 from '../media/lesson1/brush7.jpg';
import Brush3 from '../media/lesson1/brush6.jpg';
import Brush4 from '../media/lesson1/brush12.jpg';


import Wash1 from '../media/lesson2/hand-washing02.jpeg';
import Wash2 from '../media/lesson2/MOZ12_118_0.jpg';
import Wash3 from '../media/lesson2/wash-hands.jpg';

import Bugs1 from '../media/lesson3/Mosquito-net.jpg';
import Bugs2 from '../media/lesson3/mosquito.png';


const allLessons = [{
  name: "lessonOne",
  lessons: [Brush1, Brush2, Brush3, Brush4]
},
{
  name: "lessonTwo",
  lessons: [Wash1, Wash2, Wash3]
},
{
  name: "lessonThree",
  lessons: [Bugs1, Bugs2]
},
];

class Trainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLesson: [],
      showComponent: false,
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


  _onButtonClick = (image) => {
    console.log(image.target);

    let imageId = image.target.id;

    allLessons.forEach(entry => {
      // console.log(entry);

      if (imageId === entry.name) {
        console.log("This is our entry", entry);

        let lesson = entry.lessons;
        console.log("This is our new lesson array", lesson);

        this.setState({currentLesson:lesson});
       
        this.setState({
          showComponent: true,
        });

      }

    })

   
  }

  render = () => {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <element className="groupLesson post">
            {this.state.showComponent ?

              <div className="slide-container mt-5 ">
                <Slide {...this.state.properties}>
                  {this.state.currentLesson.map(image =>
                    <div key="" className="each-slide">
                      <div style={{ 'backgroundImage': `url(${image})` }}>
                      </div>
                    </div>
                  )}
                </Slide>
              </div>


              :
              <div className="text-center mt-5">
                <card className="mr-5">
                  <img
                    onClick={(image) => this._onButtonClick(image)}
                    id="lessonOne"

                    src={Brush11}
                    alt="WashingHands"
                    style={{
                      width: 200,
                      height: 200,
                      position: "right",
                      bottom: this.props.bottom
                    }}
                  />

                </card>

                <card className="mr-5">
                  <img
                    onClick={(image) => this._onButtonClick(image)}
                    id="lessonTwo"
                    src={Wash2}
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
                    onClick={(image) => this._onButtonClick(image)}
                    id="lessonThree"
                    src={Wash3}
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