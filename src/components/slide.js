import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <div className='slide'>
 <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src="img/main1.jpeg"
          alt="First slide"
          
        />
     
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block "
          src="img/main2.jpeg"
       
          alt="Second slide"
        />


        <Carousel.Caption>
        <div class="carousel-caption d-none d-md-block">
        <p className='slide-son'>
         
          </p>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="img/main3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
  );
}

export default Slide;