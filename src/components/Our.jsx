import React, { useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Our = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const sections = [missionRef.current, visionRef.current];

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center p-8 pt-[12rem] md:pt-0  bg-gray-100">
      <div
        ref={missionRef}
        className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-center md:text-justify px-4"
        style={{ marginBottom: 0, paddingBottom: 0 }}
      >
        <img src={assets.target} alt="Mission" className="w-1/4 h-auto mb-4 " />
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">Our Mission</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Seiko Media, our mission is simple: to build the best products that create the most value for our clients. We are driven by innovation, creativity, and data-driven decisions, ensuring that we deliver exceptional outcomes that exceed expectations.
        </p>
      </div>

      <div
        ref={visionRef}
        className="w-full md:w-1/2 h-full flex flex-col items-center justify-center text-center md:text-justify px-4"
        style={{ marginBottom: 0, paddingBottom: 0 }}
      >
        <img src={assets.telescope} alt="Vision" className="w-1/4 h-auto mb-4 mt-9 pt-5 md:pt-0 md:mt-0" />
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">Our Vision</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We strive to go above and beyond for our clients, tackling challenges head-on and delivering our best work every single day. Our vision is to help brands achieve exponential growth, month-on-month, year-on-year.
        </p>
      </div>
    </div>
  );
};

export default Our;
