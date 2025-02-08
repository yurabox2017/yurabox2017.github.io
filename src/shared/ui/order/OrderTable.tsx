import React from 'react';
import { useGetOrdersQuery } from 'src/services/api/orderApi.slice';
import { OrderRow } from './OrderRow';

export const OrderTable = () => {
  const { data, isLoading } = useGetOrdersQuery(1);

  if (isLoading) return <span>Loading...</span>;
  return (
    <table className="table table-striped table-sm table-bordered ">
      <thead>
        <tr>
          <th>№ заказа</th>
          <th>Статус</th>
          <th>Товары</th>
          <th>commandId</th>
        </tr>
      </thead>
      <tbody>{data && data?.map((order) => <OrderRow key={order.id} order={order} />)}</tbody>
    </table>
  );
};
