import React from "react";
import Campus from '../assets/bmu.jpg'
const About = () => {
  return (
    <>
      <section>
        <div class=" mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-24">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl text-teal-600 font-display">
              About Me
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src={Campus}
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>
                I did my Btech in Electronics and communication from RGPV University Bhopal in 2005 and MTech in Digital communication from RGPV University Bhopal. After that I did my PhD in Adaptive control from IIITDM Jabalpur in 2017. I started my career by working in an ISAREL Security system company as a technical head, then after worked as a Sr. lecturer in Hitkarni college for about 5 years after that I joined Gyan Ganga College of technology as an assistant professor and worked there for about 3 years, in 2017 I worked as a faculty in contract in NIT Raipur and visiting faculty in IIIT naya Raipur. I have conducted many embedded system workshops in different engineering college in India.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
