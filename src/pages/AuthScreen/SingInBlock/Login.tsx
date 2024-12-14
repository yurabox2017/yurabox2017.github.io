import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from 'src/features/store/store';
import { userActions } from 'src/features/store/user.slice';
import { useNavigate } from 'react-router';
import { IUserProfile } from 'src/entities/interfaces/IUserProfile';

interface IFormLogin {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    defaultValues: {
      email: 'test@mail.ru',
      password: 'qazQ1@',
    },
    mode: 'onChange',
  });
  const dispatch = useDispatch<AppDispath>();
  const navigate = useNavigate();
  const jwt = useSelector((s: RootState) => s.user.userData?.jwt);

  const profile: IUserProfile = {
    id: 123,
    lastName: 'Ivanov',
    firstName: 'Ivan',
    phone: '89260010101',
    email: 'test@mail.ru',
    role: 'Admin',
  };

  useEffect(() => {
    if (jwt) {
      dispatch(userActions.addProfile(profile));
      navigate('/');
    }
  }, [jwt, navigate]);

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    const jwt = Math.random().toString(16);
    dispatch(userActions.addJwt(jwt));
  };

  const passwordError = (
    <ul>
      <li>Минимальная длина пароля 5 символов</li>
      <li>Пароль должен содержать хотя бы одну цифру</li>
      <li>Пароль должен содержать хотя бы одну латинскую букву в нижнем регистре</li>
      <li>Пароль должен содержать хотя бы одну латинскую букву в верхнем регистре</li>
    </ul>
  );

  return (
    <form className="container w-50 needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className={cn(['form-control', errors.email && 'is-invalid'])}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Пароль</label>
        <input
          type="password"
          className={cn(['form-control', errors.password && 'is-invalid'])}
          id="exampleInputPassword1"
          {...register('password', {
            required: true,
            minLength: 5,
            pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/g,
          })}
          required
        />
        <div className="invalid-feedback"> {errors.password && passwordError}</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Войти
      </button>
    </form>
  );
}

export default Login;
