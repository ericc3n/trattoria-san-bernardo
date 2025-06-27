import React from 'react';
import styles from './Logo.module.scss';
import { Bebas_Neue } from "next/font/google";

const bebasNueue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-nueue'
});

export default function Logo() {
  return (
    <div className={`${styles.logo} ${bebasNueue.className}`}>
      <h4>TRATTORIA SAN BERNARDO</h4>
    </div>
  );
};
