import React, { useEffect, useState } from 'react';
import { ListProduct } from 'src/shared/ui/listProduct';
import { useInView } from 'react-intersection-observer';
import { useLazyGetProductsQuery } from 'src/services/api/productApi.slice';

const ProductPage = () => {
  // const { isLoading, data } = useGetProductsQuery({ pageSize: 30, pageNumber: 1 }, { refetchOnMountOrArgChange: true });
  const [counter, setCounter] = useState(1);
  const [loadAllProducts, { isLoading, data }] = useLazyGetProductsQuery();

  const handleLoadMoreProducts = async () => {
    // if (isLoading) return;
    setCounter((prev) => prev + 1);

    await loadAllProducts({ pageSize: 10, pageNumber: counter });
  };
  const { ref, inView } = useInView({
    threshold: 0.1,
    onChange: () => handleLoadMoreProducts(),
  });

  if (isLoading) return <span>Loading...</span>;
  return (
    <div className="row row-cols-1 gap-3 justify-content-center">
      {data && <ListProduct products={data} />}
      <span className="border border-top" ref={ref}>
        dsfsdfsf
      </span>
    </div>
  );
};

export default ProductPage;
