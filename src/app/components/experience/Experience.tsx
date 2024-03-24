"use client";
import React, { useEffect, useRef, useState } from "react";

const Experience = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isElementInViewport = () => {
        if (myRef.current) {
          const rect = myRef.current.getBoundingClientRect();

          return (
            rect.top <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
          );
        }

        return false;
      };

      if (myRef.current && isElementInViewport()) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={myRef}
      className={`flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-3000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold text-custom-orange">Experience</h1>
      <div className="flex border p-4 w-full flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4 mt-4 shadow-xl transition-shadow hover:animate-shake">
        <div className="flex text-base items-center font-bold ">
          국비지원과정
        </div>
        <div className="flex flex-col gap-1 text-xs md:text-base">
          <h1 className="font-bold text-lg">
            멀티잇 프론트엔드 개발(React 3회차)
          </h1>
          <time dateTime="2023-08-16">2023-08-16</time>
          <span>~</span>
          <time dateTime="2023-12-27">2023-12-27</time>
          <p>정상수료</p>
        </div>
      </div>
      <div className="flex border p-4 w-full flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4 mt-4 shadow-xl">
        <div className="flex text-base items-center font-bold">대학교</div>
        <div className="flex flex-col gap-1 text-xs md:text-base">
          <h1 className="font-bold text-lg">
            대림대학교 방송음향영상학과 (3년제)
          </h1>
          <time dateTime="2017-03">2017-03</time>
          <span>~</span>
          <time dateTime="2022-02">2022-02</time>
          <p>졸업</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
