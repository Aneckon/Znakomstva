import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { profilePhoto } from '..';

import { setPhoto } from '../../redux/reducer/photo';

import './profilePhoto.scss';

export const ProfilePhoto = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const photoImages = useSelector((state: any) => state.photoReducer.photoList);

  const onChangeAddPhoto = (e: any, id: number) => {
    if (e.target.files.length) {
      dispatch(setPhoto({ id: id, img: URL.createObjectURL(e.target.files[0]) }));
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
          <div key={item.id} className="profile__photo-item">
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
    </div>
  );
};
