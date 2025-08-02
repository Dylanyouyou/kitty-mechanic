"use client";

import React from "react";

const FigmaNav = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8dc1293a36ff825d9439d5380f5d3d7d44c17d0e?width=150"
            alt="Kitty Logo"
            className="w-16 h-16 sm:w-[75px] sm:h-[75px] rounded-full object-cover"
          />
          <h1
            className="text-white text-3xl sm:text-4xl lg:text-[45px] font-normal leading-tight font-luckiest-guy"
            style={{
              textShadow:
                "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000",
              WebkitTextStroke: "4px #000",
            }}
          >
            KITTY
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="w-full sm:w-auto">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end gap-1 sm:gap-0 bg-[#DDD6CC] border-3 border-black p-2 sm:p-3 rounded-none">
            <a
              href="#about"
              className="px-3 py-2 sm:px-6 sm:py-3 text-black font-luckiest-guy text-base sm:text-xl lg:text-[22px] font-normal leading-[33px] hover:bg-black hover:text-white transition-colors flex-shrink-0"
            >
              ABOUT
            </a>
            <a
              href="#contract"
              className="px-3 py-2 sm:px-6 sm:py-3 text-black font-luckiest-guy text-base sm:text-xl lg:text-[22px] font-normal leading-[33px] hover:bg-black hover:text-white transition-colors flex-shrink-0"
            >
              CONTRACT
            </a>
            <a
              href="#tokenomics"
              className="px-3 py-2 sm:px-6 sm:py-3 text-black font-luckiest-guy text-base sm:text-xl lg:text-[22px] font-normal leading-[33px] hover:bg-black hover:text-white transition-colors flex-shrink-0"
            >
              TOKENOMICS
            </a>
            <a
              href="#buy"
              className="px-3 py-2 sm:px-6 sm:py-3 text-black font-luckiest-guy text-base sm:text-xl lg:text-[22px] font-normal leading-[33px] hover:bg-black hover:text-white transition-colors flex-shrink-0"
            >
              HOW TO BUY
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FigmaNav;
