import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/features/store/store';
import { ListProduct } from 'src/shared/ui/listProduct';

const CartPage = () => {
  const allProducts = useSelector((s: RootState) => s.rootReducer.product.items);
  const cartItems = useSelector((s: RootState) => s.rootReducer.cart.items);

  const products = cartItems.map((item) => allProducts.find((product) => product.id === item.id));

  return (
    <div className="row row-cols-1 gap-3 justify-content-center">
      <ListProduct products={products} />
    </div>
  );
};
export default CartPage;
