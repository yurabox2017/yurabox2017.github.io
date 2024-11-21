import React, { FC } from 'react';
import IFullProduct from 'src/entities/interfaces/IFullProduct';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';

const FormProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFullProduct>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFullProduct> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="container needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <input
          type="text"
          className={cn(['form-control', errors.category && 'is-invalid'])}
          {...register('category', { required: true, minLength: 3 })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Title</label>
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
        <label className="form-label">Title</label>
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
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default FormProduct;
