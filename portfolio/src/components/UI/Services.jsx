import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";

const Services = () => {
  // Check if the screen width is less than or equal to the defined breakpoint for small screens
  const isSmallScreen = window.innerWidth <= 640;

  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-bold text-2xl mb-5">
            What I do 🎯
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-medium text-[500] leading-7 border border-gray-300 rounded-lg shadow-md p-4">
            I specialize in crafting engaging frontend experiences and robust
            backend solutions.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:max-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* vertical line running through the middle */}
              <div className="hidden absolute w-0.5 sm:block bg-[#134f5c] h-full left-1/2 transform -translate-x-1/2"></div>
              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-semibold mb-3 group-hover:text-white group-hover:font-medium text-xl border-b-2 border-primaryColor group-hover:border-white">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-smallTextColor group-hover:font-semibold leading-7">
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 mr-1">
                            HTML,CSS
                          </span>
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 mr-1">
                            Javascript
                          </span>
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0">
                            Typescript
                          </span>
                        </p>
                        <p className="text-[15px] mt-2 text-smallTextColor  group-hover:text-smallTextColor group-hover:font-semibold leading-7">
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 mr-1">
                            React.js
                          </span>
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 mr-1">
                            Tailwind CSS
                          </span>
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0">
                            Next.js
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {!isSmallScreen && (
                    <div className="rounded-full  bg-primaryColor border-white border-4 w-10  h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y/4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                        {/* <img src={frontendImg} alt="frontendImg" /> */}
                        <span>⚪</span>
                      </figure>
                    </div>
                  )}
                </div>
              </div>

              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-semibold mb-3 group-hover:text-white group-hover:font-medium text-xl border-b-2 border-primaryColor group-hover:border-white">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-smallTextColor group-hover:font-semibold leading-7">
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 mr-1">
                            Node.js
                          </span>
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 mr-1">
                            Express.js
                          </span>
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ">
                            MySQL
                          </span>
                        </p>
                        <p className="text-[15px] text-smallTextColor  group-hover:text-smallTextColor group-hover:font-semibold leading-7">
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 mr-1">
                            MongoDB
                          </span>
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 mr-1">
                            Socket.io
                          </span>
                          <span className="group-hover:text-black bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 ">
                            AWS
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {!isSmallScreen && (
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10  h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y/4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                        {/* <img src={backendImg} alt="backendImg" /> */}
                        <span>⚪</span>
                      </figure>
                    </div>
                  )}
                </div>
              </div>

              {/* Work Experience Card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-semibold mb-3 group-hover:text-white group-hover:font-medium text-xl border-b-2 border-primaryColor group-hover:border-white">
                          Work Experience
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-medium leading-7">
                          Worked in Nagarro as an Associate Engineer Trainee and
                          currently working in WebWrite Services as a Software
                          Developer.
                        </p>
                      </div>
                    </div>
                  </div>
                  {!isSmallScreen && (
                    <div className="rounded-full  bg-primaryColor border-white border-4 w-10  h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y/4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                        {/* <img src={frontendImg} alt="frontendImg" /> */}
                        <span>⚪</span>
                      </figure>
                    </div>
                  )}
                </div>
              </div>

              {/* Education Card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-semibold mb-3 group-hover:text-white group-hover:font-medium text-xl border-b-2 border-primaryColor group-hover:border-white">
                          Education
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-medium leading-7">
                          Holding a U.G Degree of B.Tech-Infomation Technology
                          from PSIT, Kanpur.
                        </p>
                      </div>
                    </div>
                  </div>
                  {!isSmallScreen && (
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10  h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y/4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                        {/* <img src={backendImg} alt="backendImg" /> */}
                        <span>⚪</span>
                      </figure>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
