'use client';

import React, { useEffect } from 'react';
import styles from './Hero.module.scss';
import ImagesSlider from '@/components/Slider/ImagesSlider';
import useMediaQuery from '@/hooks/useMediaQuery';

interface PropsType {
  children: React.ReactNode;
}

const TABLET_SCREEN = 1080;

export default function Hero({ children }: PropsType) {
  const isTabletVp = useMediaQuery(`(max-width: ${TABLET_SCREEN}px)`);

  useEffect(() => {
    let handled = false;
    const onWheel = (e: WheelEvent) => {
      if (!handled && e.deltaY > 0 && !isTabletVp) {
        handled = true;
        const target = window.innerHeight - 0.06 * window.innerHeight;
        window.scrollTo({ top: target, behavior: 'smooth' });
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [isTabletVp]);

  return (
    <div className={`${styles.hero} s-px`}>
      <ImagesSlider />
      <div className={styles['text-content']}>
        {children}
      </div>
    </div>
  );
};
