import React, { FC } from 'react';
import { Order } from 'src/entities/types/order';

export const OrderRow: FC<{ order: Order }> = ({ order }) => {
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.status}</td>
      <td>{order.products.map(({ product }) => product?.name + ' ')}</td>
      <td>{order.commandId}</td>
    </tr>
  );
};
