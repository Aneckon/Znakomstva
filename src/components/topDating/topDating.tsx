import React, { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import { Card, mainSwiper, SwiperMain } from '..';

import './topDating.scss';

interface TopDatingProps {
  title: string;
}

export const TopDating: FC<TopDatingProps> = ({title}) => {
  return (
    <div className="topDating">
      <h2>{title}</h2>
      <SwiperMain>
        {mainSwiper.map((item: any) => (
          <SwiperSlide key={item.id}>
            <Card />
          </SwiperSlide>
        ))}
      </SwiperMain>
    </div>
  );
};
