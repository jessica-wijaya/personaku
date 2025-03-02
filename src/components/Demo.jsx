import React, { useState, useEffect } from "react";
import demo_1 from "../assets/demo_1.png";
import demo_2 from "../assets/demo_2.png";
import demo_3 from "../assets/demo_3.png";

const Demo = () => {
  const [clicked, setClicked] = useState("b1");
  // Fade state for the image (true = fully visible, false = hidden)
  const [fade, setFade] = useState(true);

  const stepOrder = { b1: 1, b2: 2, b3: 3 };

  const getCircleClasses = (step) => {
    if (stepOrder[clicked] > stepOrder[step]) {
      // prev step
      return "bg-[#C7D8FF] transition-colors duration-1000 ease-in-out";
    } else if (stepOrder[clicked] === stepOrder[step]) {
      // current step
      return "bg-[#1658f9] transition-colors duration-1000 ease-in-out";
    } else if (stepOrder[clicked] + 1 === stepOrder[step]) {
      // next step
      return "border border-[#1658f9] transition-colors duration-1500 ease-in-out animate-pulse";
    }
    return "border border-[#d9d9d9] transition-colors duration-1000 ease-in-out";
  };

  const getInnerCircleClasses = (step) => {
    // prev & current step
    if (stepOrder[clicked] >= stepOrder[step]) {
      return "bg-white transition-colors duration-1000 ease-in-out";
    }
    // next step
    if (stepOrder[clicked] + 1 === stepOrder[step]) {
      return "bg-[#1658f9] transition-colors duration-1500 ease-in-out";
    }
    // next next step
    return "bg-[#d9d9d9] transition-colors duration-1000 ease-in-out";
  };

  const getConnectorClasses = (step) => {
    // prev step
    if (stepOrder[clicked] > stepOrder[step]) {
      return "bg-[#C7D8FF] transition-colors duration-1000 ease-in-out";
    }
    // current step
    else if (stepOrder[clicked] === stepOrder[step]) {
      return "bg-[#1658f9] transition-colors duration-500 ease-linear";
    }
    return "bg-[#d9d9d9] transition-colors duration-500 ease-linear";
  };

  // Determine the active demo image based on the step.
  let activeDemoImage;
  if (clicked === "b1") {
    activeDemoImage = demo_1;
  } else if (clicked === "b2") {
    activeDemoImage = demo_2;
  } else if (clicked === "b3") {
    activeDemoImage = demo_3;
  }

  // When 'clicked' changes, trigger a fade-out and fade-in effect.
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(timeout);
  }, [clicked]);

  return (
    <div id="demo" className="w-full pt-[75px] pb-[30px] px-4 py-6 bg-white">
      <div className="max-w-[1175px] px-5 md:pl-[128px] md:pr-[131px] pt-[50px] md:pt-[131px] text-center lg:text-left">
        <h1 className="poppins-light text-[#828282] text-[18px]">DEMO</h1>
        <h2 className="poppins-semibold text-[32px] mt-2">
          Coba demo personaku sekarang!
        </h2>
      </div>

      <div className="max-w-[1175px] flex flex-col lg:flex-row gap-5 lg:gap-[164px] items-center mx-auto mt-[18px] px-4">
        {/* Steps */}
        <div className="text-left flex flex-col justify-center items-center">
          {/* Step One */}
          <button
            onClick={() => setClicked("b1")}
            className={`relative w-[350px] lg:w-[424px] flex flex-row items-center cursor-pointer rounded-[14px] p-4 mb-4 gap-[17px] ${
              clicked === "b1" &&
              "bg-[#DEE8FF] border border-[#1658f9] shadow-xl"
            }`}
          >
            {/* Circle */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getCircleClasses(
                "b1"
              )}`}
            >
              <div
                className={`w-3 h-3 rounded-full flex-shrink-0 ${getInnerCircleClasses(
                  "b1"
                )}`}
              />
              <div
                className={`absolute top-[75%] -translate-x-1/2 w-[2px] h-[70px] z-10 ${getConnectorClasses(
                  "b1"
                )}`}
              />
            </div>
            <div className="flex flex-col text-start">
              <p>Step one</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </button>

          {/* Step Two */}
          <button
            onClick={() => setClicked("b2")}
            className={`relative w-[350px] lg:w-[424px] rounded-[14px] flex flex-row items-center gap-[17px] p-4 mb-4 cursor-pointer ${
              clicked === "b2" &&
              "bg-[#DEE8FF] border border-[#1658f9] shadow-xl"
            }`}
          >
            {/* Circle */}
            <div
              className={`flex justify-center items-center w-8 h-8 rounded-full flex-shrink-0 ${getCircleClasses(
                "b2"
              )}`}
            >
              <div
                className={`w-3 h-3 rounded-full flex-shrink-0 ${getInnerCircleClasses(
                  "b2"
                )}`}
              />
              <div
                className={`absolute top-[75%] -translate-x-1/2 w-[2px] h-[70px] z-10 ${getConnectorClasses(
                  "b2"
                )}`}
              />
            </div>
            <div className="flex flex-col text-start">
              <p>Step Two</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </button>

          {/* Step Three */}
          <button
            onClick={() => setClicked("b3")}
            className={`relative w-[350px] lg:w-[424px] flex flex-row items-center gap-[17px] p-4 rounded-[14px] cursor-pointer ${
              clicked === "b3" &&
              "bg-[#DEE8FF] border border-[#1658f9] shadow-xl"
            }`}
          >
            {/* Circle */}
            <div
              className={`flex justify-center items-center w-8 h-8 rounded-full flex-shrink-0 ${getCircleClasses(
                "b3"
              )}`}
            >
              <div
                className={`w-3 h-3 rounded-full flex-shrink-0 ${getInnerCircleClasses(
                  "b3"
                )}`}
              />
            </div>
            <div className="flex flex-col text-start">
              <p>Step Three</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </button>
        </div>

        {/* Image */}
        <div className="text-right">
          <img
            src={activeDemoImage}
            className={`w-300 lg:w-full h-full py-6
            `}
            alt="Demo step"
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
