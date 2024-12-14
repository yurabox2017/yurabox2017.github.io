import React, { FC, useEffect } from 'react';

import FuncProps from 'src/entities/interfaces/IFuncProps';
import { FullProduct } from '../fullProduct';
import ShortProduct from '../shortProduct/ShortProduct';

export const ListProduct: FC<FuncProps> = ({ products }) => {
  return (
    <>
      {products.map((product, i: number) => (
        <ShortProduct key={i} {...product} />
      ))}
    </>
  );
};
