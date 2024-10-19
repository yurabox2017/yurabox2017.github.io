import IShortProduct from 'src/Interfaces/IShortProduct';
import { TrashButton } from '../TrashButton/TrashButton';

import React from 'react';

function ShortProduct({ title, price, description, image }: IShortProduct) {
  return (
    <div className="card text-center" style={{ width: '300px' }}>
      <img src={image} className="card-img-top" alt="..." style={{ objectFit: 'none' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{description}</p>
        <TrashButton counter={0} />
      </div>
    </div>
  );
}

export default ShortProduct;
