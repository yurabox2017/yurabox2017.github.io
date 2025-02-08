import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';
import { Params, useAddProductMutation, useEditProductMutation } from 'src/services/api/productApi.slice';
import { Product } from 'src/entities/types/product';
import { useGetCategoriesQuery } from 'src/services/api/categoryApi.slice';
import { useTranslation } from 'react-i18next';
import { da } from '@faker-js/faker/.';

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
  const [error, setError] = useState([]);

  const onAddSubmit: SubmitHandler<Params> = async (data) => {
    try {
      await addProduct(data).unwrap();
    } catch (error) {
      setError(error);
    }
  };
  const onUpdateSubmit: SubmitHandler<Params> = async (data) => {
    try {
      await editProduct({ params: data, id: product.id }).unwrap();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (product) {
      setValue('name', product.name);
      setValue('desc', product.desc);
      setValue('photo', product.photo);
      setValue('price', product.price);
      setValue('categoryId', product.category.id);
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
          className={cn(['form-control', error?.includes('name') && 'is-invalid'])}
          {...register('name')}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Категория
        </label>
        <select
          name="category"
          className={cn(['form-select', error?.includes('category') && 'is-invalid'])}
          {...register('categoryId')}
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
          className={cn(['form-control', error?.includes('desc') && 'is-invalid'])}
          {...register('desc')}
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
          className={cn(['form-control', error?.includes('price') && 'is-invalid'])}
          {...register('price')}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isAddLoading || isEditLoading}>
        {t('save')}
      </button>
    </form>
  );
};
