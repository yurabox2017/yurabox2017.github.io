import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { AppDispath } from 'src/features/store/store';
import { IUserState, login } from 'src/features/store/user.slice';
import { Link, useNavigate } from 'react-router';
import { IFormLogin } from 'src/entities/interfaces/IFormLogin';
import { useSignInMutation } from 'src/services/api/authApi.slice';
import type { SignInBody } from 'src/entities/types/signIn';
import { useTranslation } from 'react-i18next';

export const Login = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const dispatch = useDispatch<AppDispath>();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [signIn, { data, isLoading, error, isSuccess }] = useSignInMutation();

  useEffect(() => {
    if (isSuccess) {
      const user: IUserState = {
        jwt: data.token,
        profile: { email: data.profile.email, isAdmin: checked },
      };
      dispatch(login(user));
      navigate('/');
    } else if (error) alert(error);
  }, [navigate, data, isSuccess, error, checked, dispatch]);

  const handleChange = () => {
    setChecked(!checked);
  };
  const onSubmit: SubmitHandler<SignInBody> = async (data) => {
    await signIn(data);
  };

  return (
    <>
      <form className="container w-50 needs-validation vstack gap-2" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={cn(['form-control', errors.email && 'is-invalid'])}
          id="email"
          aria-describedby="emailHelp"
          {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
          required
        />

        <label htmlFor="password" className="form-label">
          {t('password')}
        </label>
        <input
          type="password"
          className={cn(['form-control', errors.password && 'is-invalid'])}
          id="password"
          {...register('password')}
          required
        />
        <label
          className={cn([
            'btn mx-auto w-25',
            {
              ['btn-outline-primary']: !checked,
              ['btn-success']: checked,
            },
          ])}
          htmlFor="btncheck1"
        >
          {t('admin')}
        </label>
        <input type="checkbox" className="btn-check" id="btncheck1" checked={checked} onChange={handleChange} />

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {t('signIn')}
        </button>
      </form>
      <div className="mt-3">
        <div>{t('notMember')}?</div>
        <Link to="/register-rtk"> {t('signUp')}(rtk)</Link>
        <div className="vr mx-3"></div>
        <Link to="/register-thunk">{t('signUp')}(thunk)</Link>
      </div>
    </>
  );
};
