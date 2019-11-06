// import dependences and data
import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import Brush1 from '../media/lesson1/brush11.jpg';
import Brush2 from '../media/lesson1/brush12.jpg';
import Brush3 from '../media/lesson1/brush13.jpg';
import Wash1 from '../media/lesson2/hand-washing02.jpeg';
import Wash2 from '../media/lesson2/MOZ12_118_0.jpg';
import Wash3 from '../media/lesson2/wash-hands.jpg';

// const lessonOne = [Wash1, Wash2, Wash3];
const lessonTwo = [Brush1, Brush2, Brush3];
// const lessonThree = [Brush, Brush2];

const allLessons = [{
  name: "lessonOne",
  lessons: [Brush1, Brush2, Brush3]
},
{
  name: "lessonTwo",
  lessons: [Wash1, Wash2, Wash3]
},
];

class Trainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLesson: [...lessonTwo],
      // allLessons: [{
      //   name: "lessonOne",
      //   lessons: [Brush1, Brush2, Brush3]
      // },
      // {
      //   name: "lessonTwo",
      //   lessons: [Wash1, Wash2, Wash3]
      // },
      // ],
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
      console.log(entry);

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

    // this.setState({
    //   showComponent: true,
    // });
  }

  render = () => {
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


              :
              <div>
                <card>
                  <img
                    onClick={(image) => this._onButtonClick(image)}
                    id="lessonOne"

                    src={Wash1}
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
                    onClick=""
                    className="imageHand"
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