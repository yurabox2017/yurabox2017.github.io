import React, { Children, memo, useState } from 'react';

import IShortProduct from 'src/entities/interfaces/IShortProduct';
import { CartButton } from '../cartButton';
import { AppDispath, RootState } from 'src/features/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from 'src/features/store/cart.slice';
import { ICartProduct } from 'src/entities/interfaces/ICartProduct';

const ShortProduct = memo(function ShortProduct({ id, title, price, description, image }: IShortProduct) {
  const product = { id, title, price, description, image } as IShortProduct;
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
        <CartButton product={product} count={item.count} />
      </div>
    </div>
  );
});

export default ShortProduct;
