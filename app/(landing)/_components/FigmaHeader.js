"use client";

import React from "react";

const FigmaHeader = () => {
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="flex w-full h-auto px-6 py-3.5 items-center justify-between relative rounded-full border-2 border-black bg-duis shadow-[6px_6px_0_0_#000] backdrop-blur-md sm:pr-6 sm:mx-0 pr-[25px] mx-[13px] -mt-[3px] ml-[2px]">
        {/* Logo Section */}
        <div className="flex justify-end items-center gap-2 relative">
          <img
            className="w-10 h-10 rounded-full border-2 border-black shadow-sm"
            src="https://api.builder.io/api/v1/image/assets/TEMP/c274d09705f223b4e11ce1e0489b8ddb01ef50f5?width=80"
            alt="MOMO Icon"
          />
          <div className="flex pb-0.5 flex-col items-start">
            <div className="flex w-full h-11 flex-col justify-center text-black font-luckiest-guy text-2xl font-normal leading-8 tracking-[0.6px] relative">
              <span>KITTY</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-start gap-8">
          <div className="flex flex-col items-start self-stretch relative">
            <a
              href="#about"
              className="text-black font-inter text-sm font-semibold leading-5 relative hover:text-gray-600 transition-colors"
            >
              <p>About</p>
            </a>
          </div>
          <div className="flex flex-col items-start self-stretch relative">
            <a
              href="#contract"
              className="text-black font-inter text-sm font-semibold leading-5 relative hover:text-gray-600 transition-colors"
            >
              <span>Contract</span>
            </a>
          </div>
          <div className="flex flex-col items-start self-stretch relative">
            <a
              href="#tokenomics"
              className="text-black font-inter text-sm font-semibold leading-5 relative hover:text-gray-600 transition-colors"
            >
              <span>Tokenomics</span>
            </a>
          </div>
          <div className="flex flex-col items-start self-stretch relative">
            <a
              href="#buy"
              className="text-black font-inter text-sm font-semibold leading-5 relative hover:text-gray-600 transition-colors"
            >
              <span>How to buy</span>
            </a>
          </div>
        </nav>

        {/* Social Icons */}
        <div className="flex h-10 items-start gap-4 md:gap-8"></div>
      </div>
    </header>
  );
};

export default FigmaHeader;
