import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ITrashButton from 'src/entities/interfaces/ICartButton';
import { cartActions } from 'src/features/store/cart.slice';
import { AppDispath } from 'src/features/store/store';

export const CartButton = ({ product }: ITrashButton) => {
  const [counter, setCounter] = useState<number>(0);
  const dispatch = useDispatch<AppDispath>();

  const handleAddProduct = () => {
    dispatch(cartActions.add(product));
    setCounter((prev) => prev + 1);
  };

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  if (!counter) {
    return (
      <button className="btn btn-primary" onClick={handleAddProduct}>
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
