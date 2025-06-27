'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import './Carousel.scss';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import 'react-alice-carousel/lib/alice-carousel.css';

const AliceCarousel = dynamic(() => import("react-alice-carousel"), { ssr: false });

export default function Carousel({ items }: { items: React.JSX.Element[]}) {
  return (
    <div className="carousel">
      <AliceCarousel
        items={items}
        mouseTracking
        disableButtonsControls={false}
        responsive={{
          0: { items: 1 },
          680: { items: 2 },
          1200: { items: 3 },
        }}
        renderPrevButton={() => (
          <button className="carousel-arrow">
            <IoChevronBack size={16} />
          </button>
        )}
        renderNextButton={() => (
          <button className="carousel-arrow">
            <IoChevronForward size={16} />
          </button>
        )}
      />
    </div>
  );
};