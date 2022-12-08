import React from "react";
import Rajiv from '../assets/ravie_withoutbg.png'

const Hero = () => {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={Rajiv}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-display font-bold leading-none sm:text-5xl">
              Hi
              <span className="wave">👋</span>
              <br />
              <div className="pt-4">
                <span>I am</span> Dr. Rajiv Dey
              </div>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Associate Professor @ BML Munjal University
              <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
