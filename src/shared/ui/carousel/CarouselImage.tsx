import React, { FC, memo } from 'react';
import { clsx as cn } from 'clsx';

interface IImageCarousel {
  index: number;
  image: string;
  active: string;
}

export const CarouselImage: FC<IImageCarousel> = memo((image) => {
  return (
    <div className={cn('carousel-item ', { active: image.active })}>
      <img src={image.image} className="d-block w-100" alt="..." />
    </div>
  );
});
