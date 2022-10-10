import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '..';
import { useSetLoginMutation } from '../../redux/services';
import { setToken } from '../../redux/slice/auth';

import './login.scss';

type FormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginClick, {data: loginUser}] = useSetLoginMutation()

  const [passwordShow, setPasswordShow] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickSubmit = handleSubmit((data: any) => {
    loginClick(data);
  });

  useEffect(() => {
    if (loginUser && loginUser.refreshToken) {
      dispatch(setToken(loginUser.refreshToken));
      navigate('/');
    }
  }, [dispatch, navigate, loginUser]);
  

  return (
    <div className="login">
      <div className="container">
        <div className="login__content">
          <div className="login__content-title">
            <h1>Знакомства без преград</h1>
            <p>
              Для современного мира сплочённость команды профессионалов однозначно фиксирует
              необходимость системы обучения кадров, соответствующей насущным потребностям.
            </p>
          </div>
          <form onSubmit={onClickSubmit} className="login__content-from">
            <div className="login__content-from__input">
              <div
                className={errors.email ? 'input input__auth input__errors' : 'input input__auth'}>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  })}
                  placeholder="Введіть електронну пошту"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type={'text'}
                />
                <img src="/assets/auth/message.svg" alt="" />
              </div>
            </div>
            <div className="login__content-from__input">
              <div
                className={
                  errors.password ? 'input input__auth input__errors' : 'input input__auth'
                }>
                <input
                  {...register('password', { required: true })}
                  placeholder="Введіть пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordShow ? 'password' : 'text'}
                />
                <img src="/assets/auth/password.svg" alt="" />
                <div
                  onClick={() => setPasswordShow(!passwordShow)}
                  className="login__content-from__show">
                  <img
                    src={passwordShow ? '/assets/auth/eye.svg' : '/assets/auth/eye-remove.svg'}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Button className="button__auth">Войти</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
