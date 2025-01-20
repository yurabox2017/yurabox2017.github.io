import React, { memo } from 'react';

import IShortProduct from 'src/entities/interfaces/IShortProduct';
import { CartButton } from '../cartButton';
import { RootState } from 'src/features/store/store';
import { useSelector } from 'react-redux';

const ShortProduct = memo(function ShortProduct({ id, title, price, description, image }: IShortProduct) {
  const cartItems = useSelector((s: RootState) => s.rootReducer.cart.items);
  const item = cartItems.find((item) => item.id === id);

  return (
    <div className="card text-center" style={{ width: '300px' }}>
      <img src={image} className="card-img-top" alt="..." style={{ objectFit: 'none' }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-foote1r pb-2">
        <CartButton id={id} count={item?.count ?? 0} />
      </div>
    </div>
  );
});

export default ShortProduct;
