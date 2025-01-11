import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { ServerErrors } from 'src/entities/types/serverErrors';
import { SignUpBody } from 'src/entities/types/signUp';
import { AppDispath, RootState } from 'src/features/store/store';
import { registerThunk, clearRegister } from 'src/features/store/user.slice';
import { useSignUpMutation } from 'src/services/api/authApi.slice';

export const Register = () => {
  const { register, handleSubmit } = useForm<SignUpBody>();
  const [signUp, { isLoading, error, isSuccess }] = useSignUpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispath>();
  const { status, jwt, errorState } = useSelector((s: RootState) => s.user.userData);

  const errorMsg = (error: FetchBaseQueryError | SerializedError) => {
    let errMsg: ServerErrors = JSON.parse(JSON.stringify(error));
    if (errMsg) alert(errMsg.errors[0].message);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    } else if (error) {
      if ('status' in error) errorMsg(error?.data);
    }
  }, [navigate, isSuccess, error, isLoading]);

  useEffect(() => {
    if (status === 'failed') alert(errorState.message);
    else if (status === 'succeeded') {
      navigate('/login');
    }
    return () => {
      dispatch(clearRegister());
    };
  }, [status]);

  const onSubmitRtk: SubmitHandler<SignUpBody> = async (data) => {
    await signUp({ ...data, commandId: '9998' });
  };

  const onSubmitThunk: SubmitHandler<SignUpBody> = async (data) => {
    await dispatch(registerThunk({ ...data, commandId: '9998' }));
  };

  return (
    <>
      <form className="container w-50 vstack">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" {...register('email')} />
        <label className="form-label">Пароль</label>
        <input type="password" className="form-control" id="exampleInputPassword1" {...register('password')} />
        <div className="btn-group">
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={isLoading}
            onClick={handleSubmit(onSubmitRtk)}
          >
            Зарегистрироваться(rtk-query)
          </button>
          <button
            type="submit"
            className="btn btn-secondary mt-3"
            onClick={handleSubmit(onSubmitThunk)}
            disabled={status === 'loading'}
          >
            Зарегистрироваться(thunk)
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
