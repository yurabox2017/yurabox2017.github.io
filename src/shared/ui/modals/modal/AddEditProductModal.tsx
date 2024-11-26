import React, { useEffect, useState } from 'react';
import FormProduct from '../../formProduct/FormProduct';
import Modal from './Modal';

export const AddEditProductModal = (url: string) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log('EditProductModal');
    setVisible(true);
    return () => setVisible(false);
  }, []);

  const onClosed = () => {
    setVisible(false);
  };

  return (
    <Modal header={`${url === 'add' ? 'Добавить' : 'Редактировать'} товар`} visible={visible} onClose={onClosed}>
      {<FormProduct />}
    </Modal>
  );
};
