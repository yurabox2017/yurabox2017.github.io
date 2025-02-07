import React, { useEffect, useState } from 'react';
import { ListProduct } from 'src/shared/ui/listProduct';
import { useInView } from 'react-intersection-observer';
import { productApi, useGetProductsQuery } from 'src/services/api/productApi.slice';
import { useDispatch } from 'react-redux';
import { AppDispath } from 'src/features/store/store';

export const ProductPage = () => {
  const [page, setPage] = useState(1);
  const { data: response, isFetching } = useGetProductsQuery(page);
  const dispatch = useDispatch<AppDispath>();
  const { ref } = useInView({ threshold: 1, onChange: () => handleLoadMoreProducts() });

  const handleLoadMoreProducts = async () => {
    if (Math.round(response?.pagination.total / 30) > page) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(productApi.util.invalidateTags(['Product']));
    };
  }, [dispatch]);

  if ((response?.data?.length === 0 || !response?.data) && !isFetching) return <span>нет товаров</span>;
  return (
    <div className="row row-cols-1 gap-3 justify-content-center">
      <ListProduct products={response?.data} />
      <span ref={ref}>{isFetching && <span>Loading...</span>}</span>
    </div>
  );
};
