import React, { FC } from 'react';
import { FullProduct } from '../FullProduct';
import FuncProps from 'src/entities/interfaces/IFuncProps';

export const ListProduct: FC<FuncProps> = ({ products }) => {
  return (
    <>
      {products.map((product, i: number) => (
        <FullProduct {...product} />
      ))}
    </>
  );
};
