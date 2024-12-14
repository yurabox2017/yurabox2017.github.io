import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ITrashButton from 'src/entities/interfaces/ICartButton';
import { AppDispath } from 'src/features/store/store';

export const CartButton = ({ counter, addProduct, increment, decrement }: ITrashButton) => {
  const handleClick = () => {
    addProduct();
  };

  if (!counter) {
    return (
      <button className="btn btn-primary" onClick={handleClick}>
        в корзину
      </button>
    );
  }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" onClick={decrement}>
        -
      </span>
      <input type="text" className="form-control" value={counter} readOnly />
      <span className="input-group-text" onClick={increment}>
        +
      </span>
    </div>
  );
};
