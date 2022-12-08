import React from "react";

const Experience = () => {
  return (
    <>
      <section className="bg-gray-100 text-gray-800">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-teal-600">
                <h3 className="text-3xl font-semibold">Experience</h3>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-300">
                  <h3 className="text-xl font-semibold tracking-wide">
                  Assistant Professor BML Unniversity{" "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                  2018 - Present
                  </time>
                  <p className="mt-3">
                  Embedded system, Internet of things, Microprocessors based system design
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-300">
                  <h3 className="text-xl font-semibold tracking-wide">
                  Contract Faculty NIT Raipur and Visiting Faculty IIIT Naya Raipur
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                  2017-2018
                  </time>
                  <p className="mt-3">
                  Control, Embedded system, Digital signal processing
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-300">
                  <h3 className="text-xl font-semibold tracking-wide">
                  Assistant Professor Gyan Ganga College of Technology Jabalpur
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                  2010-2013
                  </time>
                  <p className="mt-3">
                  Control, Embedded system, Digital signal processing
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-300">
                  <h3 className="text-xl font-semibold tracking-wide">
                  Sr. lecturer, Hitkarni college of engineering Jabalpur
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                  2006-2010
                  </time>
                  <p className="mt-3">
                  Control, Embedded system, Digital signal processing
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-teal-300">
                  <h3 className="text-xl font-semibold tracking-wide">
                  Technical head in Team3India Security systems India
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-600">
                  2005-2006
                  </time>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
