import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';
import { Params, useAddProductMutation, useEditProductMutation } from 'src/services/api/productApi.slice';
import { Product } from 'src/entities/types/product';
import { useGetCategoriesQuery } from 'src/services/api/categoryApi.slice';
import { useTranslation } from 'react-i18next';

interface IProductProps {
  product?: Product;
  setUnVisible?: () => void;
}

export const FormProduct: FC<IProductProps> = ({ product, setUnVisible }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Params>({ mode: 'onChange' });
  const [addProduct, { isLoading: isAddLoading, isSuccess: isAddSuccess }] = useAddProductMutation();
  const [editProduct, { isLoading: isEditLoading, isSuccess: isEditSuccess }] = useEditProductMutation();
  const { data: response } = useGetCategoriesQuery(1);

  const onAddSubmit: SubmitHandler<Params> = (data) => {
    addProduct(data);
  };
  const onUpdateSubmit: SubmitHandler<Params> = (data) => {
    editProduct({ params: data, id: product.id });
  };

  useEffect(() => {
    if (product) {
      setValue('name', product.name);
      setValue('desc', product.desc);
      setValue('photo', product.photo);
      setValue('price', product.price);
    }
  }, [product, setValue]);

  useEffect(() => {
    if (isAddSuccess) {
      alert('Продукт успешно добавлен!');
      setUnVisible();
    }
  }, [isAddSuccess]);

  useEffect(() => {
    if (isEditSuccess) {
      alert('Продукт успешно изменен!');
      setUnVisible();
    }
  }, [isEditSuccess]);

  return (
    <form
      className="container needs-validation"
      onSubmit={handleSubmit(product ? onUpdateSubmit : onAddSubmit)}
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
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Категория
        </label>
        <select
          name="category"
          className={cn(['form-select', errors.categoryId && 'is-invalid'])}
          {...register('categoryId', { required: true })}
          required
        >
          <option value="">Выберите</option>
          {response?.data?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Описание</label>
        <input
          type="text"
          className={cn(['form-control', errors.desc && 'is-invalid'])}
          {...register('desc', {
            required: true,
            minLength: 3,
          })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Цена
        </label>
        <input
          id="price"
          type="number"
          className={cn(['form-control', errors.price && 'is-invalid'])}
          {...register('price', {
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
