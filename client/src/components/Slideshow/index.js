import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import Wash from '../../media/lesson2/wash-hands.jpg';
import Brush from '../../media/lesson1/brush11.jpg';
import Brush2 from '../../media/lesson1/brush12.jpg';
import Brush3 from '../../media/lesson1/brush13.jpg';

import('./style.css');

class Slideshow extends Component {
    state = {
        brush11: Brush,
        brush12: Brush2,
        wash: Wash,
        currentLesson: [],
        lessonArray: [Brush, Brush2, Brush3],

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


    render() {


        // const properties = {
        //     duration: 5000,
        //     transitionDuration: 500,
        //     infinite: true,
        //     indicators: true,
        //     arrows: true,
        //     autoplay: false,
        //     onChange: (oldIndex, newIndex) => {
        //         console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        //     }
        // }


        return (
            
            <div className="slide-container">
              
                <Slide {...this.state.properties}>

                
                    {this.state.lessonArray.map (image =>
                    <div key="" className="each-slide">
                        <div style={{ 'backgroundImage': `url(${image})` }}>
                        <span>Lesson One</span>
                        </div>
                    </div>
                   
                    
                    )}
                </Slide>
            </div>

        )
    }

}

export default Slideshow;