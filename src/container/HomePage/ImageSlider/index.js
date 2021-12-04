import React from 'react';
import { Zoom, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import imageNew from '../../../component/'
// import image1 from '../../../asset/images/banners/slide1.jpg'
// import image2 from '../../../asset/images/banners/slide2.jpg'
// import image3 from '../../../asset/images/banners/slide3.jpg'




export const ImageSlider = (props) => {
  const images = [
    'https://mdbootstrap.com/img/Photos/Others/clothes(4)-crop.jpg',
    'https://klasses.in/uploads/books/slider_images/slider3.jpg',
    'https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg',
    'https://mdbootstrap.com/img/Photos/Others/clothes(3)-crop.jpg'
    ];

  return (
    <div className="container-fluid " style={{marginTop:"-40px"}}>
      <div className="row no-gutter">
        <div class="col-xs-1 text-center">
          <div className="slide-container" style={{ height: "80%" }}>
            <Fade duration={3000} arrows={false} autoplay={true}>
              {
                images.map((each, index) => <img key={index} style={{ maxWidth: "100%", width: "100%" }} src={each} />)
              }
              {/* <img style={{ maxWidth: "100%",width: "100%" }} src='https://mdbootstrap.com/img/Photos/Others/clothes(4)-crop.jpg'></img> */}
            </Fade>
          </div>
        </div>
      </div>
    </div >
  )
}

// src={fadeImages[2]}