import React, { useEffect, useState } from 'react';
import { ListProduct } from 'src/shared/ui/listProduct';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from 'src/features/store/store';
import { productActions } from 'src/features/store/product.slice';

const ListProductPage = () => {
  const { ref, inView } = useInView({ threshold: 0.7 });

  const products = useSelector((s: RootState) => s.rootReducer.product.items);
  const dispatch = useDispatch<AppDispath>();


  return (
    <>
      <button className='btn btn-danger my-2' onClick={() => dispatch(productActions.clear())}>Очистить</button>
      <div className="row row-cols-1 gap-3 justify-content-center">
        <ListProduct products={products} />
      </div>
    </>
  );
};

export default ListProductPage;
