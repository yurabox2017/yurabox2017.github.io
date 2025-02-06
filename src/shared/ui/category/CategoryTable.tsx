import React from 'react';
import { Category } from 'src/entities/types/category';
import { CategoryRow } from './CategoryRow';

interface ICategoryTableProps {
  data: Category[];
  isLoading: boolean;
}
export const CategoryTable = ({ data, isLoading }: ICategoryTableProps) => {
  if (isLoading) return <span>Loading...</span>;
  else if (!data) return <span>нет категорий</span>;

  return (
    <table className="table table-striped table-sm table-bordered ">
      <thead>
        <tr>
          <th>Название</th>
          <th>commanId</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((category) => (
          <CategoryRow key={category.id} category={category} />
        ))}
      </tbody>
    </table>
  );
};
