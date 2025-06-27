import Hero from '@/ui/Hero/Hero';
import Link from 'next/link';
import React from 'react';
import Snapscroll from '@/components/Snapscroll/Snapscroll';
import ReviewsSection from './ReviewsSection/ReviewsSection';
import Chiusura from '@/ui/Chiusura/Chiusura';

export default function page() {
  return (
    <>
      <Hero>
        <h1 className='dark'>Mangia Bene e Rilassati</h1>
        <p className="large mt-regular">Dimentica il solito pranzo: qui ogni piatto è un viaggio tra gusto, tradizione e pura emozione</p>
        <Link href='/prenota' className='btn-1l mt-xxl'>Prenota ora</Link>
      </Hero>
      <Snapscroll />
      <ReviewsSection />
      <Chiusura />
    </>
  );
}