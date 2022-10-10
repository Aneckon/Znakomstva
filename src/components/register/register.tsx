import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from '..';
import { useSetRegisterMutation } from '../../redux/services';
import { setToken } from '../../redux/slice/auth';

import './register.scss';

type FormValues = {
  name: string;
  date: string;
  email: string;
  password: string;
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const [passwordShow, setPasswordShow] = useState(true);
  const dispatch = useDispatch();
  const [registerClick, { data: registerUser }] = useSetRegisterMutation();

  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [gender, setGender] = useState('boy');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickSubmit = handleSubmit((data: any) => {
    registerClick(data);
  });

  useEffect(() => {
    if (registerUser && registerUser.refreshToken) {
      dispatch(setToken(registerUser.refreshToken));
      navigate('/');
    }
  }, [dispatch, navigate, registerUser]);

  return (
    <div className="register">
      <div className="container">
        <div className="register__content">
          <div className="register__content-title">
            <h2>Создай новый аккаунт</h2>
            <p>Присоединяйся к сообществу из 518 млн человек!</p>
          </div>
          <p className="register__error">{registerUser && registerUser.error}</p>
          <form onSubmit={onClickSubmit} className="register__content-from">
            <div className="register__content-from__input">
              <div
                className={errors.name ? 'input input__auth input__errors' : 'input input__auth'}>
                <input
                  {...register('name', { required: true, maxLength: 15 })}
                  placeholder="Ваше ім'я"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type={'text'}
                />
                <img src="/assets/auth/user.svg" alt="" />
              </div>
            </div>
            <div className="register__content-from__input">
              <p>Дата народження</p>
              <div
                className={errors.date ? 'input input__auth input__errors' : 'input input__auth'}>
                <input
                  {...register('date', { required: true })}
                  type="date"
                  placeholder="Місяц"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
                <img src="/assets/auth/date.svg" alt="" />
              </div>
            </div>
            <div className="register__content-checkbox">
              <label htmlFor="radioBoy">
                <input
                  className="input input__checkbox"
                  value={'boy'}
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  placeholder="boy"
                  id={'radioBoy'}
                  checked={gender === 'boy'}
                />
                <span className={gender === 'boy' ? 'active' : ''}></span>
              </label>
              <label htmlFor="radioWoman">
                <input
                  className="input input__checkbox"
                  value="woman"
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  placeholder="woman"
                  id={'radioWoman'}
                  checked={gender === 'woman'}
                />
                <span className={gender === 'boy' ? '' : 'active'}></span>
              </label>
            </div>
            <div className="register__content-from__input">
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
            <div className="register__content-from__input">
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
                  className="register__content-from__show">
                  <img
                    src={passwordShow ? '/assets/auth/eye.svg' : '/assets/auth/eye-remove.svg'}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Button className="button__auth">Створити акаунт</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
