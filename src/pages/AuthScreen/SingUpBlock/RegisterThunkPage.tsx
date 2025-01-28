import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { SignUpBody } from 'src/entities/types/signUp';
import { AppDispath, RootState } from 'src/features/store/store';
import { registerThunk, clearRegister } from 'src/features/store/user.slice';

export const RegisterThunkPage = () => {
  const { register, handleSubmit } = useForm<SignUpBody>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispath>();
  const { status, errorState } = useSelector((s: RootState) => s.rootReducer.user);

  useEffect(() => {
    if (status === 'failed') alert(errorState.message);
    else if (status === 'succeeded') {
      navigate('/login');
    }
    return () => {
      dispatch(clearRegister());
    };
  }, [status, errorState, navigate, dispatch]);

  const onSubmitThunk: SubmitHandler<SignUpBody> = async (data) => {
    dispatch(registerThunk({ ...data, commandId: '9998' }));
  };

  return (
    <>
      <form className="container w-50 vstack gap-2" onSubmit={handleSubmit(onSubmitThunk)}>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" {...register('email')} />
        <label htmlFor="password" className="form-label">
          Пароль
        </label>
        <input type="password" className="form-control" id="password" {...register('password')} />
        <div className="btn-group">
          <button type="submit" className="btn btn-primary mt-3" disabled={status === 'loading'}>
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
