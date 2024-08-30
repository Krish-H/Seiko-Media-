import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { assets } from '../assets/assets';
import Impact from './Impact';


gsap.registerPlugin(ScrollTrigger);

const ApproachImpact = () => {
  useEffect(() => {
    gsap.fromTo(
      '.content-left',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.approach-container',
          start: 'top 80%',
        },
      }
    );
    gsap.fromTo(
      '.content-right',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.approach-container',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <>
    <div className="approach-container flex flex-col md:flex-row justify-between items-center py-12 px-6 bg-gray-100">
      <div className="content-left flex flex-col md:w-1/2 text-left mb-8 md:mb-0">
        <h1 className="text-3xl text-gray-800 font-bold mb-4">Our Approach</h1>
        <p className="ttext-gray-600 text-lg text-justify md:pr-8 leading-relaxed">
          Our approach is holistic and data-driven, starting with in-depth research and development, followed by strategy implementation, optimization, and scaling. We’re not just another agency—we’re your growth partners, committed to scaling your business with forward-thinking strategies.
        </p>
      </div>
      <div className="content-right flex items-center justify-center md:w-1/2">
        <img
          src={assets.collab}
          alt="Approach"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
    <Impact/>
    </>
  );
};

export default ApproachImpact;
