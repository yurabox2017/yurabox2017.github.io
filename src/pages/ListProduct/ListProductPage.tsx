import React, { useEffect, useState } from 'react';
import { ListProduct } from 'src/shared/ui/listProduct';
import { useInView } from 'react-intersection-observer';
import { createRandomProduct } from 'src/homeworks/ts1/3_write';
import Modal from 'src/stories/Homework2/modals/Modal';
import FormProduct from 'src/shared/ui/formProduct/FormProduct';

const ListProductPage = () => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  const [products, setProducts] = useState([]);

  function addProduct() {
    const createdAt = '2023-06-06T12:06:56.957Z';
    const product = createRandomProduct(createdAt);

    setProducts([
      ...products,
      {
        price: product.price,
        category: product.category.name,
        title: product.name,
        description: product.desc,
        images: [product.photo],
      },
    ]);
  }

  useEffect(() => {
    addProduct();
  }, []);

  useEffect(() => {
    if (inView) {
      addProduct();
    }
  }, [addProduct, inView]);



  return (
    <>
      <div className="row row-cols-1 gap-3 justify-content-center">
        <ListProduct products={products} />
      </div>
      <div className="row row-cols-1 justify-content-center ">
        <button ref={ref} className="btn btn-outline-primary my-2 w-50" onClick={addProduct}>
          Показать еще
        </button>
      </div>
    </>
  );
};

export default ListProductPage;
