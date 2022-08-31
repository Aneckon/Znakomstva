import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import { removeSelected } from '../../redux/slice/selected';
import { Card } from '..';

import './selected.scss';

export const Selected = () => {
  const dispatch = useDispatch();
  const selectedImages = useSelector((state: any) => state.selectedReducer.selectedList);
  console.log(selectedImages);

  const onClickRemoveSelected = (id: number) => {
    dispatch(removeSelected({ id }));
    toast.success('Успішно видалив', { theme: 'dark' });
  };

  return (
    <div className="selected">
      <div className="selected__wrraper">
        {selectedImages.map((user: any) => (
          <div key={user.id} className="selected__item">
            <Card name={user.userName} age={user.userAre} img={user.img} />
            <div className="selected__item-delete" onClick={() => onClickRemoveSelected(user.id)}>
              <img src="/assets/favorite/delete-button.svg" alt="" />
            </div>
          </div>
        ))}
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
