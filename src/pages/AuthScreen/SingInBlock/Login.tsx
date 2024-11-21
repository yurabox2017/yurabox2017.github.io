import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';

interface IFormLogin {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormLogin> = (data) => {
    alert(`Добро пожаловать ${data.email}`);
    reset();
  };

  const passwordError = (
    <ul>
      <li>Минимальная длина пароля 10 символов</li>
      <li>Пароль должен содержать хотя бы одну цифру</li>
      <li>Пароль должен содержать хотя бы одну латинскую букву в нижнем регистре</li>
      <li>Пароль должен содержать хотя бы одну латинскую букву в верхнем регистре</li>
    </ul>
  );

  return (
    <form className="container needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        Submit
      </button>
    </form>
  );
}

export default Login;
