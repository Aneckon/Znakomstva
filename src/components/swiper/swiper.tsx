import React, { FC } from 'react';
import { Swiper } from 'swiper/react';

import './swiper.scss';
import 'swiper/css';

interface SwiperMainProps {
  children: any;
}

export const SwiperMain: FC<SwiperMainProps> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      breakpoints={{
        '@0.00': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        '@1.50': {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper">
      {children}
    </Swiper>
  );
};
