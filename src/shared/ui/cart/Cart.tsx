import React, { FC } from 'react';
import { Product as ProductEntity } from 'src/entities/types/product';
import { ICartItem } from 'src/features/store/cart.slice';
import { Product } from '../product/Product';
import { OrderButton } from '../order/OrderButton';

export const Cart: FC<{ cartProducts: ProductEntity[]; cartItems: ICartItem[] }> = ({ cartProducts, cartItems }) => {
  const total = cartItems
    .map((i) => {
      const product = cartProducts.find((p) => p && p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.quantity * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto" style={{ height: '75vh' }}>
        <div className="row row-cols-1 gap-3 justify-content-center">
          {cartItems.map((item) => {
            const cartProduct = cartProducts.find((p) => p.id === item.id);
            if (!cartProduct) {
              return;
            }
            return <Product key={cartProduct.id} {...cartProduct} />;
          })}
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <OrderButton total={total} />
      </div>
    </>
  );
};
