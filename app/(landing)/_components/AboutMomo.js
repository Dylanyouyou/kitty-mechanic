import React from "react";

const AboutMomo = () => {
  return (
    <section
      id="about"
      className="flex w-full min-h-screen py-24 px-6 md:px-16 lg:px-24 justify-center items-center"
      style={{ backgroundColor: "rgba(228, 224, 225, 1)" }}
    >
      <div className="w-full max-w-7xl h-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          {/* Heading */}
          <div className="mb-8">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight font-luckiest-guy sm:text-6xl text-[50px]"
              style={{
                color: "rgba(196, 43, 16, 1)",
                textShadow:
                  "4px 4px 0 #000, 6px 6px 0 #000, 0 4px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000, 2px 2px 0 #000",
              }}
            >
              <p>ABOUT KITTY</p>
            </h2>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-800 text-lg leading-relaxed font-inter">
              KITTY MECHANIC IS THE MEMECOIN THAT RUNS LIKE A RACE CAR — BUILT
              ON SOLANA, DESIGNED TO RACE. FAIR LAUNCH, FULL THROTTLE, AND 100%
              MEOW POWER.
            </p>
          </div>

          {/* Tagline */}
          <div></div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fa0b33e0886874f46b6cddb65ebb255c5%2F00ba5857bb554c918af726dd30ae8b8a"
              alt="About MOMO"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-2xl border-4 border-black shadow-[8px_8px_0_0_#000]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMomo;
