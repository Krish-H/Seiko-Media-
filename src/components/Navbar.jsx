import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white/30 backdrop-blur-lg flex items-center justify-between px-8 shadow-lg border-b border-white/20">
      <div className="flex items-center">
        <img src={assets.logo} alt="Logo" width={80} height={80} className="mr-3 p-0" />
        <h1 className="text-black hidden md:flex text-xl font-semibold">Seiko Media</h1>
      </div>
      <ul className="flex space-x-8 text-black font-700">
        <li className=" hover:text-[#5eaad0] transition-transform transform hover:scale-105 cursor-pointer">About</li>
        <li className="hover:text-[#5eaad0] transition-transform transform hover:scale-105 cursor-pointer">Services</li>
        <li className="hover:text-[#5eaad0] transition-transform transform hover:scale-105 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
