import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { AppDispath } from 'src/features/store/store';
import IShortProduct from 'src/entities/interfaces/IShortProduct';
import { productApi, useAddProductMutation, useEditProductMutation } from 'src/services/api/productApi.slice';
import { Product } from 'src/entities/types/product';

interface IFormProps {
  product?: Product;
  setUnVisible?: () => void;
}

const FormProduct: FC<IFormProps> = ({ product, setUnVisible }) => {
  const dispatch = useDispatch<AppDispath>();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Product>({ mode: 'onChange' });
  const [addProduct, { isLoading: isAddLoading, isSuccess: isAddSuccess }] = useAddProductMutation();
  const [editProduct, { isLoading: isEditLoading, isSuccess: isEditSuccess }] = useEditProductMutation();

  const onAddSubmit: SubmitHandler<Product> = (data) => {
    dispatch(productApi.util.resetApiState());
    addProduct({
      ...data,
      categoryId: '6792aaab8e877ac8a95a8a89',
    });
  };
  const onUpdateSubmit: SubmitHandler<Product> = (data) => {
    editProduct({ params: { ...data, categoryId: '6792aaab8e877ac8a95a8a89' }, id: product.id });
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
        Сохранить
      </button>
    </form>
  );
};
export default FormProduct;
