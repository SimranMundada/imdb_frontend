import '../Carousel/Carousel.css'
import movie1 from '../MovieImages/Vincenzo.jpg'
import movie2 from '../MovieImages/NineTailed.jpg'
import movie3 from '../MovieImages/Strong Woman.jpg'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MovieCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel"
    >
      <Carousel.Item>
        <img
          className="carouselItem"
          src={movie1}
          alt="Vincenzo"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselItem"
          src={movie2}
          alt="The Tale of The Nine Tailed"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselItem"
          src={movie3}
          alt="Strong Woman Do Bong Soon"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MovieCarousel;