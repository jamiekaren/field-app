import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import Wash from '../../media/wash-hands.jpg';
import Brush from '../../media/brush11.jpg';
import Brush2 from '../../media/brush12.jpg';

import('./style.css');



class Lessons extends Component {
    state = {
        brush11: Brush,
        brush12: Brush2,
        wash: Wash,
        lessonArray: [Brush, Brush2],

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


    componentDidMount() {
        console.log(this.props.array);

    }



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
                    <div className="each-slide">
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

export default Lessons;