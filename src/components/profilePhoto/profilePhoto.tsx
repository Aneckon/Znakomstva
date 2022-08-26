import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { profilePhoto } from '..';

import { setPhoto } from '../../redux/reducer/photo';

import './profilePhoto.scss';

export const ProfilePhoto = () => {
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
      {profilePhoto.map((item) => (
        <div key={item.id} className="profile__photo-item">
          <label htmlFor={item.name}>
            <input id={item.name} type="file" onChange={(e) => onChangeAddPhoto(e, item.id)} />
          </label>
          <ProfilePhotoImage id={item.id} />
        </div>
      ))}
    </div>
  );
};
