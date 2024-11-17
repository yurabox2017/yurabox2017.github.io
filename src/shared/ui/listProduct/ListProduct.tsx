import React, { FC } from 'react';

import FuncProps from 'src/entities/interfaces/IFuncProps';
import { FullProduct } from '../fullProduct';

export const ListProduct: FC<FuncProps> = ({ products }) => {
  return (
    <>
      {products.map((product, i: number) => (
        <FullProduct {...product} />
      ))}
    </>
  );
};
