import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ICartButton from 'src/entities/interfaces/ICartButton';
import { cartActions } from 'src/features/store/cart.slice';
import { AppDispath } from 'src/features/store/store';

export const CartButton = ({ product }: ICartButton) => {
  const [counter, setCounter] = useState<number>(0);
  const dispatch = useDispatch<AppDispath>();

  const handleAdd = () => {
    dispatch(cartActions.add(product.id));
  };

  const handleIncrement = () => {};

  const handleDecrement = () => {};

  if (counter === 0) {
    return (
      <button className="btn btn-primary" onClick={handleAdd}>
        в корзину
      </button>
    );
  }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" onClick={handleDecrement}>
        -
      </span>
      <input type="text" className="form-control text-center" value={counter} readOnly />
      <span className="input-group-text" onClick={handleIncrement}>
        +
      </span>
    </div>
  );
};
