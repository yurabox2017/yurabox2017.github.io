
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { SignUpBody } from 'src/entities/types/AuthUser';
import { ServerErrors } from 'src/entities/types/serverErrors';
import { AppDispath } from 'src/features/store/store';
import { useAddNewUserMutation } from 'src/services/api/newUserApi.slice';

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpBody>({
    mode: 'onChange',
    defaultValues: {
      email: 'test1@mail.ru',
      password: 'qazqweert',
      commandId: '9998',
    },
  });
  const [addNewUser, { isLoading, error, isSuccess }] = useAddNewUserMutation();
  const dispatch = useDispatch<AppDispath>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    } else if (error) {
      if ('status' in error) {
        const errMsg: ServerErrors = 'error' in error ? error.error : JSON.parse(JSON.stringify(error.data));
        alert(errMsg.errors[0].message);
      }
    }
  }, [navigate, isSuccess, error, isLoading]);

  const onSubmit: SubmitHandler<SignUpBody> = async (data) => {
    // try {
    await addNewUser(data);
    // } catch (err) {
    //   var errMsg = err as ServerErrors;
    //   //   var errMsg: ServerErrors = JSON.parse(JSON.stringify(err.data));
    //   alert(errMsg.errors[0].message);
    // }
  };
  return (
    <>
      <form className="container w-50 vstack" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" {...register('email')} />
        <label className="form-label">Пароль</label>
        <input type="password" className="form-control" id="exampleInputPassword1" {...register('password')} />
        <button type="submit" className="btn btn-primary mt-3" disabled={isLoading}>
          Зарегистрироваться
        </button>
        {/* <div className="invalid-feedback"> {isError && (error as ServerErrors).errors[0].message}</div> */}
      </form>
      <div className="mt-3">
        <div>Есть акканут?</div>
        <Link to="/login">Войти</Link>
      </div>
    </>
  );
};
