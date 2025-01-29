import React, { useCallback, useEffect, useState } from 'react';
import { ListProduct } from 'src/shared/ui/listProduct';
import { useInView } from 'react-intersection-observer';
import { useGetProductsQuery, useLazyGetProductsQuery } from 'src/services/api/productApi.slice';

const ProductPage = () => {
  const [counter, setCounter] = useState(1);
  const { isLoading, data } = useGetProductsQuery(
    { pageSize: 30, pageNumber: counter },
    { refetchOnMountOrArgChange: true }
  );

  const { ref, inView } = useInView({ threshold: 1, onChange: () => handleLoadMoreProducts() });

  const handleLoadMoreProducts = async () => {
    setCounter((prev) => prev + 1);
  };

  if (isLoading) return <span>Loading...</span>;
  return (
    <div className="row row-cols-1 gap-3 justify-content-center">
      {data && <ListProduct products={data} />}
      <span ref={ref}> </span>
    </div>
  );
};

export default ProductPage;
