import React from 'react';
import { Slide } from 'react-slideshow-image';
import Wash from '../../media/wash-hands.jpg';
import Brush from '../../media/brush11.jpg';
import Brush2 from '../../media/brush12.jpg';
import ('./style.css');
// import React from 'react';


// class Lessons extends Component {

//     render() {
//         const slideImages = [
//             'client\src\media\brush11.jpg',
//             'client\src\media\brush12.jpg',
//             'client\src\media\wash-hands.jpg'
//         ];

//         const properties = {
//             duration: 5000,
//             transitionDuration: 500,
//             infinite: true,
//             indicators: true,
//             arrows: true,
//             onChange: (oldIndex, newIndex) => {
//                 console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//             }
//         }

//         const Slideshow = () => {
//             console.log(slideImages[0])
//             return (
//                 <div className="slide-container">
//                     <Slide {...properties}>
//                         <div className="each-slide">
//                             <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
//                                 <span>Slide 1</span>
//                             </div>
//                         </div>
//                         <div className="each-slide">
//                             <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
//                                 <span>Slide 2</span>
//                             </div>
//                         </div>
//                         <div className="each-slide">
//                             <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
//                                 <span>Slide 3</span>
//                             </div>
//                         </div>
//                     </Slide>
//                 </div>
//             )
//         }
//     }
// }

// export default Lessons
// class Lessons extends Component {
    const slideImages = [
        '../../media/brush11.jpg',
        '../../media/brush12.jpg',
        '../../media/wash-hands.jpg'
    ];

    const properties = {
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

    const Slideshow = () => {
        console.log(slideImages);
        return (
            <div className="slide-container">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${Wash})` }}>
                            <span>Slide 1</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className style={{ 'backgroundImage': `url(${Brush})` }}>
                            <span>Slide 2</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${Brush2})` }}>
                            <span>Slide 3</span>
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }

export default Slideshow;