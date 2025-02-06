import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/features/store/store';
import { useLazyGetProductByIdQuery } from 'src/services/api/productApi.slice';
import type { Product as ProductEntity } from 'src/entities/types/product';
import { Cart } from 'src/shared/ui/cart/Cart';

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

  useEffect(() => {
    loadCartProducts();
  }, [cartItems]);

  if (isLoading) return <span>Loading...</span>;
  if (cartProducts.length === 0) return <span>нет товаров в корзине</span>;
  return <Cart cartProducts={cartProducts} cartItems={cartItems} />;
};
