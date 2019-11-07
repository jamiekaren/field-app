// import dependences and data
import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import BrushThumb from '../media/lesson1/lesson1-thumbnail.png';
import Brush from '../media/lesson1/brush.png';
import Brush1 from '../media/lesson1/brush1.png';
import Brush2 from '../media/lesson1/brush2.png';
import Brush3 from '../media/lesson1/brush3.png';
import Brush4 from '../media/lesson1/brush4.png';

import WashThumb from '../media/lesson2/lesson2-thumbnail.png';
import Wash1 from '../media/lesson2/wash1.png';
import Wash2 from '../media/lesson2/wash2.png';
import Wash3 from '../media/lesson2/wash3.png';
import Wash4 from '../media/lesson2/wash4.png';
// import Wash3 from '../media/lesson2/wash-hands.jpg';

import BugsThumb from '../media/lesson3/lesson3-thumbnail.png';
import Bugs1 from '../media/lesson3/bug1.png';
import Bugs2 from '../media/lesson3/bug2.png';
import Bugs3 from '../media/lesson3/bug3.png';
import Bugs4 from '../media/lesson3/bug4.png';
import Bugs5 from '../media/lesson3/bug5.png';


const allLessons = [{
  name: "lessonOne",
  lessons: [Brush, Brush1, Brush2, Brush3, Brush4]
},
{
  name: "lessonTwo",
  lessons: [Wash1, Wash2, Wash3, Wash4]
},
{
  name: "lessonThree",
  lessons: [Bugs1, Bugs2, Bugs3, Bugs4, Bugs5]
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
    // this._onButtonClick = this._onButtonClick.bind(this);
  
  }


  buttonBackLessons = () => {
    console.log("Button working!");
    this.setState({showComponent: false});
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
                <br></br>
               <center><button type="button" onClick={(event) =>this.buttonBackLessons(event)}>Back to lessons</button></center>
              </div>


              :
              <div className="text-center mt-5">
                <card className="mr-5">
                  <img
                    onClick={(image) => this._onButtonClick(image)}
                    id="lessonOne"

                    src={BrushThumb}
                    alt="WashingHands"
                    style={{
                      width: 400,
                      height: 250,
                      position: "right",
                      bottom: this.props.bottom
                    }}
                  />

                </card>

                <card className="mr-5">
                  <img
                    onClick={(image) => this._onButtonClick(image)}
                    id="lessonTwo"
                    src={WashThumb}
                    alt="WashingHands"
                    style={{
                      width: 400,
                      height: 250,
                      position: "left",
                      bottom: this.props.bottom
                    }}
                  />
                </card>

                <card>
                  <img
                    onClick={(image) => this._onButtonClick(image)}
                    id="lessonThree"
                    src={BugsThumb}
                    alt="WashingHands"
                    style={{
                      width: 400,
                      height: 250,
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