import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Hero() {
  return (
    <>
      <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    interval={4000}
                    showThumbs={false}
      >
      <div>
                    <img src="/images/banner1.jpg" />
                </div>
                <div>
                    <img src="/images/banner2.jpg" />
                </div>
                <div>
                    <img src="/images/banner3.jpg" />
                </div>
      </Carousel>
    </>
  );
}