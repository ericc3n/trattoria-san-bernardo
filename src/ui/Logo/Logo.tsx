'use client';

import React from 'react';
import styles from './Logo.module.scss';
import { Bebas_Neue } from "next/font/google";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For Next.js 13+ app directory

const bebasNueue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-nueue'
});

export default function Logo() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.logo} ${bebasNueue.className}`}>
      <h4>
        <Link href='/' scroll={true} onClick={handleClick}>
          TRATTORIA SAN BERNARDO
        </Link>
      </h4>
    </div>
  );
};
