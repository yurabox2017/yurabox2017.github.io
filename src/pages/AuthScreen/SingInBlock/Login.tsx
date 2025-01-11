import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { AppDispath } from 'src/features/store/store';
import { IUserState, login } from 'src/features/store/user.slice';
import { Link, useNavigate } from 'react-router';
import { IFormLogin } from 'src/entities/interfaces/IFormLogin';
import { useSignInMutation } from 'src/services/api/authApi.slice';
import { ServerErrors } from 'src/entities/types/serverErrors';
import { SignInBody } from 'src/entities/types/signIn';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();
  const dispatch = useDispatch<AppDispath>();
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);
  const [signIn, { data, isLoading, error, isSuccess }] = useSignInMutation();

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (isSuccess) {
      var user: IUserState = {
        jwt: data.token,
        profile: { email: data.profile.email, isAdmin: checked },
      };
      dispatch(login(user));
      navigate('/');
    } else if (error) {
      if ('status' in error) {
        const errMsg: ServerErrors = 'error' in error ? error.error : JSON.parse(JSON.stringify(error.data));
        alert(errMsg.errors[0].message);
      }
    }
  }, [navigate, data, isSuccess, error, isLoading]);

  const onSubmit: SubmitHandler<SignInBody> = async (data) => {
    await signIn(data);
  };

  return (
    <>
      <form className="container w-50 needs-validation vstack" onSubmit={handleSubmit(onSubmit)} noValidate>
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
            {...register('password')}
            required
          />
        </div>
        <div className="btn-group mb-3 w-25 mx-auto text-center" role="group">
          <input type="checkbox" className="btn-check" id="btncheck1" checked={checked} onChange={handleChange} />
          <label className="btn btn-outline-primary" htmlFor="btncheck1">
            Админ
          </label>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Войти
        </button>
      </form>
      <div className="mt-3">
        <div>Нет акканута?</div>
        <Link to="/register">Зарегистрироваться</Link>
      </div>
    </>
  );
}

export default Login;
