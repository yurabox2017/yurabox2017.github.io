import React from 'react';
import { Product as ProductEntity } from 'src/entities/types/product';
import { Product } from '../product/Product';

interface ListProductProps {
  products: ProductEntity[];
}

export const ListProduct = ({ products }: ListProductProps) => {
  return products && products.map((product, i: number) => <Product key={i} {...product} />);
};
