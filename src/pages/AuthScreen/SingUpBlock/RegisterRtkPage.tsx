import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import type { ServerErrors } from 'src/entities/types/serverErrors';
import { SignUpBody } from 'src/entities/types/signUp';
import { useSignUpMutation } from 'src/services/api/authApi.slice';

export const RegisterRtkPage = () => {
  const { register, handleSubmit } = useForm<SignUpBody>();
  const [signUp, { isLoading, error, isSuccess }] = useSignUpMutation();
  const navigate = useNavigate();

  const onSubmitRtk: SubmitHandler<SignUpBody> = async (data) => {
    await signUp({ ...data, commandId: '9998' });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    } else if (error && 'status' in error) {
      const errMsg: ServerErrors = 'error' in error ? error.error : JSON.parse(JSON.stringify(error.data));
      alert(errMsg?.errors[0]?.message);
    }
  }, [isSuccess, error]);

  return (
    <>
      <form className="container w-50 vstack gap-2" onSubmit={handleSubmit(onSubmitRtk)}>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" {...register('email')} />
        <label htmlFor="password" className="form-label">
          Пароль
        </label>
        <input type="password" className="form-control" id="password" {...register('password')} />
        <div className="btn-group">
          <button type="submit" className="btn btn-primary mt-3" disabled={isLoading}>
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className="mt-3">
        <div>Есть акканут?</div>
        <Link to="/login">Войти</Link>
      </div>
    </>
  );
};
