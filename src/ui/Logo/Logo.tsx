'use client';

import React from 'react';
import styles from './Logo.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import Image from 'next/image';

export default function Logo() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.logo}>
      <Link href='/' scroll={true} onClick={handleClick}>
        <Image src='/logo.png' alt='logo' height={24} width={181} />
      </Link>
    </div>
  );
};
