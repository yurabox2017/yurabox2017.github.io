import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from 'src/features/store/cart.slice';
import { AppDispath, RootState } from 'src/features/store/store';

const CartProduct = () => {
  const products = useSelector((s: RootState) => s.rootReducer.cart.items);
  const dispatch = useDispatch<AppDispath>();

  return (
    <div className="row row-cols-1 gap-3 justify-content-center">
      {products.map((product) => (
        <div key={product.id} className="card text-center" style={{ width: '300px' }}>
          <img src={product.image} className="card-img-top" alt="..." style={{ objectFit: 'none' }} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-danger" onClick={() => dispatch(cartActions.delete(product.id))}>
              удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CartProduct;
