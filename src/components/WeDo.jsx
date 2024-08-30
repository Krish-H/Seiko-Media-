import React, { useEffect, useRef } from 'react';
import CardContainer from './CardContainer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WeDo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      section.querySelectorAll('h1, p, .card'),
      {
        opacity: 0,
        y: 50, // Start from 50px below
      },
      {
        opacity: 1,
        y: 0, // Move to its natural position
        duration: 1,
        stagger: 0.3, // Stagger animations by 0.3s
        scrollTrigger: {
          trigger: section,
          start: 'top 75%', // Animation starts when top of section hits 75% of the viewport
          end: 'bottom 80%', // Animation ends when bottom of section hits 30% of the viewport
          scrub: true, // Smooth scrolling
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-[#F4F4F4] flex flex-col items-center text-center px-4 py-10 md:py-20 mt-[-5rem] relative"
    >
      <h1 className="text-[#1E2A38] text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        What We Do
      </h1>
      
      <CardContainer />
    </div>
  );
};

export default WeDo;
