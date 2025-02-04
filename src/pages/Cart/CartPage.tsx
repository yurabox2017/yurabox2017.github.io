import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/features/store/store';
import { useLazyGetProductByIdQuery } from 'src/services/api/productApi.slice';
import { Product } from 'src/shared/ui/product/Product';
import type { Product as ProductEntity } from 'src/entities/types/product';
import { OrderButton } from 'src/shared/ui/order/OrderButton';

export const CartPage = () => {
  const [cartProducts, setCartProducts] = useState<ProductEntity[]>([]);
  const [loadProductById, { isLoading }] = useLazyGetProductByIdQuery();

  const cartItems = useSelector((s: RootState) => s.rootReducer.cart.items);

  const getProduct = async (id: string): Promise<ProductEntity> => {
    try {
      const product = await loadProductById(id).unwrap();
      return product;
    } catch (e) {
      return null;
    }
  };

  const loadCartProducts = async () => {
    const products = await Promise.all(cartItems.map((item) => getProduct(item.id)));

    setCartProducts(products.filter((item) => item !== null));
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
            const cartProduct = cartProducts.find((p) => p.id === item.id);
            if (!cartProduct) {
              return;
            }
            return <Product key={cartProduct.id} {...cartProduct} />;
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
