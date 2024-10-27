import React, { useEffect, useState } from 'react';
import logo from '../../app/logo.svg';
import { useTranslation } from 'react-i18next';
import Modal from '../modal/Modal';
import { createRandomProduct } from 'src/homeworks/ts1/3_write';
import { useInView } from 'react-intersection-observer';
import { ListProduct } from 'src/shared/ui/listProduct';


export default function Main() {
  const [visible, setVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.7 });

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
  }, [addProduct,inView]);

  const onOpen = () => {
    setVisible(true);
  };
  const onClosed = () => {
    setProducts([]);
    setVisible(false);
  };

  const modal = (
    <Modal header="Товары" visible={visible} onClose={onClosed}>
      <div className="row row-cols-1 gap-3 justify-content-center">
        <ListProduct products={products} />
      </div>
      <div className="row row-cols-1 justify-content-center ">
        <button ref={ref} className="btn btn-outline-primary my-2 w-50" onClick={addProduct}>
          Показать еще
        </button>
      </div>
    </Modal>
  );

  return (
    <main className="container">
      <div className="row justify-content-center">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="text-left fs-3">
          <li> {t(`key1`)}</li>
          <li>{t(`key2`)}</li>
          <li> {t(`key3`)}</li>
          <li>{t(`key4`)}</li>
        </ul>
        <button className="btn btn-primary w-50" onClick={onOpen}>
          Открыть модальное окно
        </button>
        {modal}
      </div>
    </main>
  );
}
