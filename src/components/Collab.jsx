import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faPaintBrush, faChartLine } from '@fortawesome/free-solid-svg-icons';


gsap.registerPlugin(ScrollTrigger);

const Collab = () => {
  useEffect(() => {
    gsap.fromTo(
      '.collab-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.collab-container',
          start: 'top 80%',
     
        },
      }
    );
  }, []);

  return (
    <div className="collab-container py-12 px-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-[#1E2A38] mb-8">What We Stand For: Values That Matter To Us</h1>
      <div className="flex flex-wrap justify-around items-center gap-6">
        <div className="collab-item bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center">
          <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Innovation</h3>
          <p className="text-gray-700">We never stop exploring, ensuring exceptional outcomes.</p>
        </div>

        <div className="collab-item bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center">
          <FontAwesomeIcon icon={faUsers} className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Collaboration</h3>
          <p className="text-gray-700">Together, we can achieve remarkable results!</p>
        </div>

        <div className="collab-item bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center">
          <FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Creativity</h3>
          <p className="text-gray-700">We think outside the box, setting us apart.</p>
        </div>

        <div className="collab-item bg-white shadow-lg rounded-lg p-6 max-w-xs w-full text-center">
          <FontAwesomeIcon icon={faChartLine} className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Data Driven</h3>
          <p className="text-gray-700">Advanced analytics drive our growth!</p>
        </div>
      </div>
    </div>
  );
};

export default Collab;
