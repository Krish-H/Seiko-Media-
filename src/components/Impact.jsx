import React, { useEffect } from 'react';
import NumberCounter from './NumberCounter';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
  useEffect(() => {
    gsap.fromTo(
      '.impact-container',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.impact-container',
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      '.number-counter',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5, // Slight delay for a staggered effect
        scrollTrigger: {
          trigger: '.number-counter',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="impact-container py-12 px-6 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Impact</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          With over 7 years of experience and $52 million+ generated for 60+ brands, we have a proven track record of driving results. Our 5-star ratings and success stories speak volumes about the impact we can make on your business.
        </p>
      </div>
      <div className="number-counter">
        <NumberCounter />
      </div>
    </div>
  );
};

export default Impact;
