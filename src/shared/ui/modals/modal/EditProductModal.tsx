import React, { useEffect, useState } from 'react';
import FormProduct from '../../formProduct/FormProduct';
import Modal from './Modal';
import { useNavigate } from 'react-router';

export const EditProductModal = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  const onClosed = () => {
    setVisible(false);
    navigate(-1);
  };

  return <Modal header="Редактировать товар" visible={visible} onClose={onClosed}></Modal>;
};
