import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



import Carousel1 from '../assets/img/delever.avif' 
import Carousel2 from '../assets/img/carousel-2.jpg' 
import Carousel3 from '../assets/img/carousel-3.jpg'


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel2}
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carousel3}
          alt="Image 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
