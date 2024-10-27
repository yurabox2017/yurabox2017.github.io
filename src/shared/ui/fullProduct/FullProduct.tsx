import React, { FC } from 'react';
import { TrashButton } from '../trashButton';
import IFullProduct from 'src/entities/interfaces/IFullProduct';


export const FullProduct: FC<IFullProduct> = ({ ...product }) => {
  return (
    <div className="card text-center" style={{ width: '300px' }}>

      {product.images?.map((image, i) => (
        <img key={i} src={image} className="card-img-top img-thumbnail" alt="..." style={{ objectFit: 'none' }} />
      ))}

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
        <p className="card-text">{product.description}</p>
        <p className="card-text">цена: {product.price}р</p>
        <TrashButton counter={0} />
      </div>
    </div>
  );
}

