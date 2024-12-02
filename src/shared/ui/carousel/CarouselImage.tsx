import React, { FC, memo } from 'react';
import { clsx as cn } from 'clsx';

interface ICarouselImage {
  index: number;
  image: string;
  active: string;
}

const CarouselImage: FC<ICarouselImage> = memo((carouseImage) => {
  return (
    <div className={cn('carousel-item ', { active: carouseImage.active })}>
      <img src={carouseImage.image} className="d-block w-100" alt="..." />
    </div>
  );
});
export default CarouselImage;
