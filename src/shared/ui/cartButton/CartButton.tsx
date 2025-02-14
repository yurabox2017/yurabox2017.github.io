import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ICartButton from 'src/entities/interfaces/ICartButton';
import { cartActions } from 'src/features/store/cart.slice';
import { AppDispath, RootState } from 'src/features/store/store';

export const CartButton = ({ id, quantity }: ICartButton) => {
  const dispatch = useDispatch<AppDispath>();
  const isAuth = !!useSelector((s: RootState) => s.rootReducer.user?.jwt);

  const handleAdd = () => {
    dispatch(cartActions.add(id));
  };

  const handleIncrement = () => {
    dispatch(cartActions.add(id));
  };

  const handleDecrement = () => {
    dispatch(cartActions.remove(id));
  };
  if (!isAuth) return <></>;
  if (quantity === 0) {
    return (
      <button className="btn btn-sm btn-primary" onClick={handleAdd}>
        в корзину
      </button>
    );
  }

  return (
    <div className="input-group input-group-sm">
      <span className="input-group-text" onClick={handleDecrement}>
        -
      </span>
      <input type="text" className="form-control text-center" value={quantity} readOnly />
      <span className="input-group-text" onClick={handleIncrement}>
        +
      </span>
    </div>
  );
};
