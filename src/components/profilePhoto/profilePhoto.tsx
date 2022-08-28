import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { profilePhoto } from '..';

import { addFavorite } from '../../redux/slice/favorite';
import { addPhoto } from '../../redux/slice/photo';

import './profilePhoto.scss';

interface ProfilePhotoProps {
  userName?: string;
  userAre?: string;
}

export const ProfilePhoto: FC<ProfilePhotoProps> = ({ userName, userAre }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const photoImages = useSelector((state: any) => state.photoReducer.photoList);
  const favoriteImages = useSelector((state: any) => state.favoriteReducer.favoriteList);
  const favoriteItem = favoriteImages.some((item: any) => item.userName === userName);

  const onChangeAddPhoto = (e: any, id: number) => {
    if (e.target.files.length) {
      dispatch(addPhoto({ id: id, img: URL.createObjectURL(e.target.files[0]) }));
    }
  };

  const onClickAddFavorite = (img: string, id: number) => {
    if (!favoriteItem) {
      dispatch(addFavorite({ img, userAre, userName, id }));
      toast.success('Успішно добавив', { theme: 'dark' });
    }
  };

  const ProfilePhotoImage = ({ id }: any) => {
    return photoImages.map((image: any) => (
      <img
        key={image.id}
        className={id === image.id && image.length !== 0 ? '' : 'none'}
        src={id === image.id ? image.img : ''}
        alt=""
      />
    ));
  };

  return (
    <div className="profile__photo">
      {location.pathname === '/profile' ? (
        profilePhoto.map((item) => (
          <div key={item.id} className="profile__photo-item">
            <label htmlFor={item.name}>
              <input id={item.name} type="file" onChange={(e) => onChangeAddPhoto(e, item.id)} />
            </label>
            <ProfilePhotoImage id={item.id} />
          </div>
        ))
      ) : photoImages.length > 0 ? (
        photoImages.map((item: any) => (
          <div
            key={item.id}
            className="profile__photo-item"
            onClick={() => onClickAddFavorite(item.img, item.id)}>
            <img src={item.img} alt="" />
            <div className="profile__photo-item__favorite">
              <img src="/assets/profile/favorite.svg" alt="" />
            </div>
            <div className="profile__photo-item__selected">
              <img src="/assets/profile/selected.svg" alt="" />
            </div>
          </div>
        ))
      ) : (
        <div className="profile__photo-item">не має фотографії</div>
      )}
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
