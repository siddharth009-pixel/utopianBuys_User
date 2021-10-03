import React from 'react';
import { Zoom, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../../../asset/images/banners/slide1.jpg'
import image2 from '../../../asset/images/banners/slide2.jpg'
import image3 from '../../../asset/images/banners/slide3.jpg'


const images = [
  image1, image2, image3
];

export const ImageSlider = (props) => {

  return (
    <div className="container-fluid ">
      <div className="row no-gutter">
        <div class="col-xs-1 text-center">
          <div className="slide-container" style={{ height: "80%"}}>
            <Fade duration={5000} arrows={false} autoplay={true}>
              {
                images.map((each, index) => <img key={index} style={{ maxWidth: "100%" }} src={each} />)
              }
            </Fade>
          </div>
        </div>
      </div>
    </div >
  )
}

// src={fadeImages[2]}