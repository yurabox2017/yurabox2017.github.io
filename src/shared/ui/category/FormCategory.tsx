import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Category } from 'src/entities/types/category';
import { categoryApi, useAddCategoryMutation, useEditCategoryMutation } from 'src/services/api/categoryApi.slice';
import cn from 'clsx';
import { useTranslation } from 'react-i18next';
interface ICategoryProps {
  category?: Category;
  setUnVisible?: () => void;
}
export const FormCategory: FC<ICategoryProps> = ({ category, setUnVisible }) => {
  const { t } = useTranslation();
  const [addCategory, { isLoading: isAddLoading, isSuccess: isAddSuccess }] = useAddCategoryMutation();
  const [editCategory, { isLoading: isEditLoading, isSuccess: isEditSuccess }] = useEditCategoryMutation();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Category>({ mode: 'onChange' });

  const onAddSubmit: SubmitHandler<Category> = (data) => {
    // dispatch(categoryApi.util.resetApiState());
    addCategory(data);
  };
  const onUpdateSubmit: SubmitHandler<Category> = (data) => {
    editCategory({ params: data, id: category.id });
  };
  useEffect(() => {
    if (category) {
      setValue('name', category.name);
      setValue('photo', category.photo);
    }
  }, [category, setValue]);
  useEffect(() => {
    if (isAddSuccess) {
      alert('Категория успешно добавлена!');
      setUnVisible();
    }
  }, [isAddSuccess]);

  useEffect(() => {
    if (isEditSuccess) {
      alert('Категория успешно изменена!');
      setUnVisible();
    }
  }, [isEditSuccess]);

  return (
    <form
      className="container needs-validation"
      onSubmit={handleSubmit(category ? onUpdateSubmit : onAddSubmit)}
      noValidate
    >
      <div className="mb-3">
        <label className="form-label">Фото</label>
        <input type="text" className="form-control" {...register('photo')} />
      </div>
      <div className="mb-3">
        <label className="form-label">Название</label>
        <input
          type="text"
          className={cn(['form-control', errors.name && 'is-invalid'])}
          {...register('name', {
            required: true,
            minLength: 3,
          })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isAddLoading || isEditLoading}>
        {t('save')}
      </button>
    </form>
  );
};
