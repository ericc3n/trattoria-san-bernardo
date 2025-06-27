'use client';

import React, { useEffect, useState } from 'react';
import styles from './ImagesSlider.module.scss';
import Image from 'next/image';
import { heroImgs } from '@/features/heroImgs';

export default function ImagesSlider() {
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const autoImgChanger = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= heroImgs.length ? 0 : nextIndex;
        });
        setFade(false); // Start fade in
      }, 300); // Duration should match CSS transition
    }, 3800);
    return () => {
      clearInterval(autoImgChanger);
    };
  }, []);

  return (
    <div className={styles['images-slider']}>
      <div className={fade ? styles['fade-out'] : styles['fade-in']}>
        <Image
          fill
          src={heroImgs[index]}
          alt='slider-img'
          style={{ opacity: '.4', objectFit: 'cover' }}
          priority={true}
        />
      </div>
    </div>
  );
};
