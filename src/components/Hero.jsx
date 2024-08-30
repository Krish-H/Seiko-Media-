import React, { useState, useEffect } from 'react';
import WeDo from './WeDo';
import { assets } from '../assets/assets';
import Our from './Our';
import Collab from './Collab';
import ApprochImpact from './ApprochImpact';
import Call from './Call';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [assets.marketing, assets.shopify, assets.msg]; // Add your image paths here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds delay

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <>
      <div className="banner w-full h-screen bg-[#F4F4F4] flex flex-col md:flex-row text-center md:text-left px-6">
        <div className="md:w-1/2 flex pt-4 flex-col ">
          <h1 className="text-[#1E2A38] text-4xl md:text-5xl font-bold pt-[5rem] mb-6">
            Who We Are
          </h1>
          <p className="text-[#333333] text-justify pr-5 pt-10 font-semibold text-lg md:text-[1.2rem] leading-relaxed">
            &ldquo;At Seiko Media, we are pioneers in the eCommerce space, committed to helping direct-to-consumer brands scale rapidly and profitably. With a data-driven approach and a passion for innovation, we craft high-converting websites, dynamic ad campaigns, and comprehensive multi-channel strategies that drive results. Our mission is to empower brands to reach their full potential in the digital marketplace.&rdquo;
          </p>
        </div>
        <div className="hidden md:flex md:w-1/2 pb-[8rem] items-center justify-center relative">
          <div className="relative w-[500px] h-[400px] overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2s] ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <WeDo />
      <Collab/>
      <ApprochImpact/>
      <Our/>
      <Call/>
    </>
  );
};

export default Hero;
