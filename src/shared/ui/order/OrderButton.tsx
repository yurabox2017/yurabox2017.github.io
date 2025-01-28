import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServerErrors } from 'src/entities/types/serverErrors';
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
  console.log(isAuth);
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
  }, [data, error, isSuccess]);
  return (
    <button className="btn btn-success" disabled={isLoading || !isAuth} onClick={createOrderHandler}>
      Оформить за: {total}
      <span>₽</span>
    </button>
  );
};
