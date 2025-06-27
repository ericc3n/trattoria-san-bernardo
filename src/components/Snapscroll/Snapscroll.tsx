import React from 'react';
import styles from './Snapscroll.module.scss';
import { snapscrollElements } from '@/features/snapscrollElements';
import Image from 'next/image';
import FadeIn from '../Animation/FadeIn';

// function SectionCounter(): JSX.Element {
//   return (
//     <div className={styles['section-counter']}>
//       <ul>
//         {snapscrollElements.map((_, index) => (
//           <li key={index}><Circle Icon={`${index + 1}`} classname={styles.circle} /></li>
//         ))}
//       </ul>
//     </div>
//   )
// }

export default function Snapscroll() {
  return (
    <div className={styles['snapscroll-container']}>
      <div className={styles.snapscroll}>
        {snapscrollElements.map((el, index) => (
          <FadeIn key={index} direction='up' delay={0.3}>
            <div className={styles.section}>
              <div className={styles['imgs-grid']}>
                <div className={styles['img-cell']}>
                  <Image
                    src={el.imgs[0]}
                    alt="image-grid"
                    fill
                    className={styles.image}
                    sizes="(max-width: 600px) 100vw, 262px"
                  />
                </div>
                <div className={styles['img-cell']}>
                  <Image
                    src={el.imgs[1]}
                    alt="image-grid"
                    fill
                    className={styles.image}
                    sizes="(max-width: 600px) 100vw, 205px"
                  />
                </div>
                <div className={styles['img-cell']}>
                  <Image
                    src={el.imgs[2]}
                    alt="image-grid"
                    fill
                    className={styles.image}
                    sizes="(max-width: 600px) 100vw, 205px"
                  />
                </div>
              </div>
              <div className={styles['text-content']}>
                <h3>{el.title}</h3>
                <p className='medium mt-xxl'>{el.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
