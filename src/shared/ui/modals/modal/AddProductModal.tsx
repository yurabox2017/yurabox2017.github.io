import React, { useEffect, useState } from 'react';
import FormProduct from '../../formProduct/FormProduct';
import Modal from './Modal';

export const AddProductModal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  const onClosed = () => {
    setVisible(false);
  };

  return (
    <Modal header="Добавить товар" visible={visible} onClose={onClosed}>
      {<FormProduct />}
    </Modal>
  );
};