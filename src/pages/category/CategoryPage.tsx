import React from 'react';
import { useGetCategoriesQuery } from 'src/services/api/categoryApi.slice';
import { CategoryTable } from 'src/shared/ui/category/CategoryTable';

export const CategoryPage = () => {
  const { data: response, isLoading } = useGetCategoriesQuery(1);
  return <CategoryTable data={response?.data} isLoading={isLoading} />;
};
