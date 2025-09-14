import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-black"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Timeline entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-6 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "sm:mr-20 sm:ml-0" : "sm:ml-20 sm:mr-0"
              } mt-12 sm:mt-0`}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={experience.img}
                    alt={experience.company}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {experience.role}
                  </h3>
                  <p className="text-purple-400 font-semibold">
                    {experience.company}
                  </p>
                </div>
              </div>

              {/* Duration & Description */}
              <p className="text-gray-400 text-sm">{experience.duration}</p>
              <p className="text-gray-300 mt-4">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
