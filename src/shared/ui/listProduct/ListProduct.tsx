import React, { FC } from 'react';

import FuncProps from 'src/entities/interfaces/IFuncProps';
import { Product } from '../product/Product';

export const ListProduct: FC<FuncProps> = ({ products }) => {
  return products.map((product, i: number) => <Product key={i} {...product} />);
};
