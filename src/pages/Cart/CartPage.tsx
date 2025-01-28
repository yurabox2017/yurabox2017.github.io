import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/features/store/store';
import { useLazyGetProductsQuery } from 'src/services/api/productApi.slice';
import ShortProduct from 'src/shared/ui/shortProduct/ShortProduct';
import { Product } from 'src/entities/types/product';
import { OrderButton } from 'src/shared/ui/order/OrderButton';

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [loadAllProducts, { isLoading }] = useLazyGetProductsQuery();

  const cartItems = useSelector((s: RootState) => s.rootReducer.cart.items);

  const loadCartProducts = async () => {
    const data = await loadAllProducts({ pageSize: 30, pageNumber: 1 }, false).unwrap();
    const products = cartItems.map((item) => data.find((product) => product.id === item.id));
    setCartProducts(products);
  };

  const total = cartItems
    .map((i) => {
      const product = cartProducts.find((p) => p && p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.quantity * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);

  useEffect(() => {
    loadCartProducts();
  }, [cartItems]);

  if (isLoading) return <span>Loading...</span>;
  if (cartProducts.length === 0) return <span>нет товаров в корзине</span>;
  return (
    <div className="container">
      <div className="overflow-auto" style={{ height: '75vh' }}>
        <div className="row row-cols-1 gap-3 justify-content-center">
          {cartItems.map((item) => {
            const cartProduct = cartProducts.find((p) => {
              if (p) return p.id === item.id;
            });
            if (!cartProduct) {
              return;
            }
            return <ShortProduct key={cartProduct.id} {...cartProduct} />;
          })}
        </div>
      </div>
      <hr />
      <div className="row">
        <OrderButton total={total} />
      </div>
    </div>
  );
};
export default CartPage;
