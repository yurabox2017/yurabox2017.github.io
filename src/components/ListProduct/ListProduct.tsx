import React, { FC } from 'react';
import IFullProduct from 'src/Interfaces/IFullProduct';
import ShortProduct from '../ShortProduct/ShortProduct';
import FullProduct from '../FullProduct/FullProduct';

export const ListProduct: FC<{ products: IFullProduct[] }> = ({ products }) => {
  return (
    <>
      {products.map((product, i: number) => (
        <FullProduct
          key={i}
          category={product.category}
          title={product.title}
          description={product.description}
          images={product.images}
          price={product.price}
        />
      ))}
    </>
  );
};
