import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from './Modal';
import { FormCategory } from '../../category/FormCategory';

export const AddCategoryModal = () => {
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
    <Modal header="Добавить категорию" visible={visible} onClose={onClosed}>
      <FormCategory setUnVisible={onClosed} />
    </Modal>
  );
};
