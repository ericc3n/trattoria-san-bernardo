import React from 'react';
import styles from './Items.module.scss';
import { ReviewType } from '@/features/reviews';
import Image from 'next/image';
import { FaRegStar, FaStar } from 'react-icons/fa';

export default function Item({ item }: { item: ReviewType }) {
  const imgApp = (app: string): string => app === "facebook" ? "/facebook-user.png" : "/google-maps-user.png";
  return (
    <div className={styles.item}>
      <div className={styles.profile}>
        <Image width={64} height={64} alt={`${item.app}-user`} src={imgApp(item.app)} />
        <div className={styles.info}>
          <h5>{item.username}</h5>
          <div className={styles.stars}>
            {Array.from({ length: item.starRating }).map((_, i) => <FaStar key={i} />)}
            {Array.from({ length: 5 - item.starRating }).map((_, i) => <FaRegStar key={i} />)}
          </div>
        </div>
      </div>
      <p className="mt-xs">{item.description}</p>
    </div>
  );
};
