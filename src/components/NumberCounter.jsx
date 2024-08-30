import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faHandshake } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NumberCounter = () => {
  useEffect(() => {
    gsap.fromTo(
      '.count-up',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.number-counter',
          start: 'top 80%',
          onEnter: () => gsap.to('.count-up', { opacity: 1, duration: 0.5 }),
          onLeaveBack: () => gsap.to('.count-up', { opacity: 0, duration: 0.5 }),
        },
      }
    );
  }, []);

  return (
    <div className="w-full font-bold text-[2rem] flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 pt-[4rem] items-center number-counter">
      <div className="flex flex-col items-center count-up" style={{ opacity: 0 }}>
        <div className='mb-6'>
          <FontAwesomeIcon icon={faDollarSign} className="text-[3rem] text-[#333333] mb-1" />
        </div>
        <span>$<CountUp end={10} duration={4.5} />+</span>
        <p className="text-gray-600">Million Spent</p>
      </div>

      <div className="flex flex-col items-center count-up" style={{ opacity: 0 }}>
        <div className='mb-6'>
          <FontAwesomeIcon icon={faChartLine} className="text-[3rem] text-[#333333] mb-1" />
        </div>
        <span>$<CountUp end={52} duration={4.5} />+</span>
        <p className="text-gray-600">Million Generated</p>
      </div>

      <div className="flex flex-col items-center count-up" style={{ opacity: 0 }}>
        <div className='mb-6'>
          <FontAwesomeIcon icon={faHandshake} className="text-[3rem] text-[#333333] mb-1" />
        </div>
        <span><CountUp end={60} duration={4.5} />+</span>
        <p className="text-gray-600">Brands Served</p>
      </div>
    </div>
  );
};

export default NumberCounter;
