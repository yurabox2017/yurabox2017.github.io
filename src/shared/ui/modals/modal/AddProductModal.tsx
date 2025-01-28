import React, { useEffect, useState } from 'react';
import FormProduct from '../../formProduct/FormProduct';
import Modal from './Modal';
import { useNavigate } from 'react-router';

export const AddProductModal = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  const onClosed = () => {
    navigate(-1);
  };

  return (
    <Modal header="Добавить товар" visible={visible} onClose={onClosed}>
      <FormProduct setUnVisible={onClosed} />
    </Modal>
  );
};
