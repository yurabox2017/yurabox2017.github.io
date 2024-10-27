
import React from 'react';
import { TrashButton } from '../trashButton';
import IShortProduct from 'src/entities/interfaces/IShortProduct';

function ShortProduct({ ...product }: IShortProduct) {
  return (
    <div className="card text-center" style={{ width: '300px' }}>
      <img src={product.image} className="card-img-top" alt="..." style={{ objectFit: 'none' }} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
        <p className="card-text">{product.description}</p>
        <TrashButton counter={0} />
      </div>
    </div>
  );
}

export default ShortProduct;
