import React from "react";

// Graduation In: Electronics and communication
// Graduation From: RGPV Bhopal
// Graduation Year: 2005
// Post Graduation In: Digital communication
// Post Graduation From: RGPV Bhopal
// Post Graduation Year: 2012
// Doctorate In: Electronics and communication (Specialization: Adaptive control)
// Doctorate From: IIITDM Jabalpur
// Doctorate Year: 2017

const Education = () => {
  return (
    <>
      <section className=" text-white bg-gray-900">
        <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
          <h2 className="text-2xl font-bold font-display md:text-4xl text-teal-300 ">Education</h2>
          <div className="space-y-8 font-display">
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2005</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current text-teal-300"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">
                    RGPV Bhopal
                    </h4>
                  </div>
                  <p className="ml-7 text-gray-600">
                  Electronics and communication
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2012</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current text-teal-300"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">
                    RGPV Bhopal
                    </h4>
                  </div>
                  <p className="ml-7 text-gray-600">
                  Digital communication
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold md:text-xl">2017</h3>
              <ul className="space-y-4">
                <li className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current text-teal-300"
                    >
                      <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                      <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                    </svg>
                    <h4 className="font-medium">
                    IIITDM Jabalpur
                    </h4>
                  </div>
                  <p className="ml-7 text-gray-600">
                  Electronics and communication (Specialization: Adaptive control)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
