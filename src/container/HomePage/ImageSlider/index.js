import React from 'react';
import { Zoom,Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const images = [
  'images/slide-01.jpg',
  'images/slide-02.jpg',
  'images/slide-01.jpg',
  'images/slide-03.jpg',
];

export const ImageSlider  = (props) => {

  return (
    <div className="slide-container">
      <Fade >
          {
             images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Fade>
    </div>
  )
}

// src={fadeImages[2]}