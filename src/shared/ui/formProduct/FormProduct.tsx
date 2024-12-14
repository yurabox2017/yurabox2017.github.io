import React, { FC } from 'react';
import IFullProduct from 'src/entities/interfaces/IFullProduct';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { AppDispath } from 'src/features/store/store';
import { productActions } from 'src/features/store/product.slice';
import IShortProduct from 'src/entities/interfaces/IShortProduct';
import { faker } from '@faker-js/faker';

const FormProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IShortProduct>({
    mode: 'onChange',
  });
  const dispatch = useDispatch<AppDispath>();

  const onSubmit: SubmitHandler<IShortProduct> = (data) => {
    console.log(data)
    if (!data.id) data = { ...data, id: faker.number.int() };
    dispatch(productActions.add(data));
    reset();
  };

  return (
    <form className="container needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-3">
        <label className="form-label">Категория</label>
        <input
          type="text"
          className={cn(['form-control', errors.category && 'is-invalid'])}
          {...register('category', { required: true, minLength: 3 })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Название</label>
        <input
          type="text"
          className={cn(['form-control', errors.title && 'is-invalid'])}
          {...register('title', {
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
          className={cn(['form-control', errors.description && 'is-invalid'])}
          {...register('description', {
            required: true,
            minLength: 3,
          })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Цена</label>
        <input
          type="number"
          className={cn(['form-control', errors.price && 'is-invalid'])}
          {...register('price', {
            required: true,
            minLength: 3,
          })}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Сохранить
      </button>
    </form>
  );
};
export default FormProduct;
