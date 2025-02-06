import React, { FC, useState } from 'react';
import { Category } from 'src/entities/types/category';
import { FormCategory } from './FormCategory';
import Modal from '../modals/modal/Modal';
import { useDeleteCategoryMutation } from 'src/services/api/categoryApi.slice';

export const CategoryRow: FC<{ category: Category }> = ({ category }) => {
  const [visible, setVisible] = useState(false);
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();
  const handleEditCategory = () => {
    setVisible(true);
  };
  const handleDeleteCategory = () => {
    deleteCategory(category.id);
  };
  const handleClosed = () => {
    setVisible(false);
  };
  const modal = (
    <Modal header="Редактировать категорию" visible={visible} onClose={handleClosed}>
      <FormCategory category={category} setUnVisible={handleClosed} />
    </Modal>
  );
  return (
    <>
      <tr>
        <td>{category.name}</td>
        <td>{category.commandId}</td>
        <td style={{ width: '100px' }}>
          <div className="btn-group">
            <button className="btn btn-sm btn-primary" disabled={isLoading} onClick={handleEditCategory}>
              Редактировать
            </button>
            <button className="btn btn-sm btn-danger " disabled={isLoading} onClick={handleDeleteCategory}>
              Удалить
            </button>
          </div>
        </td>
      </tr>
      {visible && modal}
    </>
  );
};
