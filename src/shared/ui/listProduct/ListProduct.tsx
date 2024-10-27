import React, { FC } from 'react';
import IFullProduct from 'src/entities/interfaces/IFullProduct';
import { FullProduct } from '../fullProduct/FullProduct';


export const ListProduct: FC<{ products: IFullProduct[] }> = ({ products }) => {
  return (
    <>
      {products.map((product, i: number) => (
        <FullProduct {...product} />
      ))}
    </>
  );
};
