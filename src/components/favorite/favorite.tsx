import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { Card } from '..';
import { removeFavorite } from '../../redux/slice/favorite';

import './favorite.scss';

export const Favorite = () => {
  const dispatch = useDispatch();
  const favoriteImages = useSelector((state: any) => state.favoriteReducer.favoriteList);
  const navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();
    if (!cookies.get('Token')) {
      navigate('/register');
    }
  }, [navigate]);

  const onClickRemoveFavorite = (id: number) => {
    dispatch(removeFavorite({ id }));
    toast.success('Успішно видалив', { theme: 'dark' });
  };

  return (
    <div className="favorite">
      <div className="container">
        <h2>Улюблені</h2>
        <div className="favorite__wrraper">
          {favoriteImages.map((user: any) => (
            <div key={user.id} className="favorite__item">
              <Card name={user.userName} age={user.userAre} img={user.img} />
              <div className="favorite__item-delete" onClick={() => onClickRemoveFavorite(user.id)}>
                <img src="/assets/favorite/delete-button.svg" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
