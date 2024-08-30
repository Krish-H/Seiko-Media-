import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const Call = () => {
  useEffect(() => {
    gsap.fromTo(
      '.call-container',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.call-container',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="call-container flex flex-col md:flex-row items-center justify-center bg-blue-50 p-6 mt-6 md:mt-0 md:p-8 rounded-lg shadow-lg max-w-5xl mx-auto my-8 md:my-12">
      <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-[#F6BD60] rounded-full shadow-md">
        <FontAwesomeIcon icon={faPhone} className="text-white text-3xl md:text-4xl" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-8 flex-1 text-center md:text-left">
        <p className="text-base md:text-lg text-gray-700 mb-4">
          You've scrolled this far, so we might as well catch up for a quick chat. Book a call today!
        </p>
        <button className="bg-[#F6BD60] text-white px-4 py-2 md:px-6 md:py-3 rounded-md shadow-md hover:opacity-80 transition-opacity transform hover:scale-105">
  Book a free strategy call
</button>

      </div>
    </div>
  );
};

export default Call;
