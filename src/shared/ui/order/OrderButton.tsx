import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from 'src/features/store/cart.slice';
import { RootState } from 'src/features/store/store';
import { useCreateOrderMutation } from 'src/services/api/orderApi.slice';

interface IOrderButtonProps {
  total: number;
}
export const OrderButton = ({ total }: IOrderButtonProps) => {
  const [createOrder, { data, isLoading, isSuccess, error }] = useCreateOrderMutation();
  const cartItems = useSelector((s: RootState) => s.rootReducer.cart.items);
  const isAuth = !!useSelector((s: RootState) => s.rootReducer.user?.jwt);

  const dispatch = useDispatch();

  const createOrderHandler = async () => {
    await createOrder({ products: cartItems });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(cartActions.clear());
      alert('Заказ №' + data.id + ' успешно оформлен!');
    } else if (error) {
      alert(error);
    }
  }, [data, error, isSuccess, dispatch]);
  return (
    <button className="btn btn-success w-50" disabled={isLoading || !isAuth} onClick={createOrderHandler}>
      Оформить за: {total}
      <span>₽</span>
    </button>
  );
};
