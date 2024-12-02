import React, { FC, useEffect, useState } from 'react';
import { CarouselImage } from './CarouselImage';

export const Carousel: FC<{ images: string[] }> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    console.log(index);
  }, [index]);

  const handlePrev = () => {
    if (index === 0) setIndex(images.length - 1);
    else setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === images.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className="w-50 container">
      <div id="carouselExample" className="carousel slide carousel-dark ">
        <div className="carousel-inner">
          {images.map((img: string, i: number) => (
            <CarouselImage key={i} image={img} index={index} active={index === i ? 'active' : null} />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          onClick={handleNext}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
