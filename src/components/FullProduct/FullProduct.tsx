import React from 'react';

import { TrashButton } from '../TrashButton/TrashButton';
import IFullProduct from 'src/Interfaces/IFullProduct';


function FullProduct({ price, images, category, title, description }: IFullProduct) {
  return (
    <div className="card text-center" style={{ width: '300px' }}>
      
      {images?.map((image, i) => (
        <img key={i} src={image} className="card-img-top img-thumbnail" alt="..." style={{ objectFit: 'none' }} />
      ))}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text">цена: {price}р</p>
        <TrashButton counter={0} />
      </div>
    </div>
  );
}
export default FullProduct;
