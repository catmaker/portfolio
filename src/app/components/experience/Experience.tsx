"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import useVisibility from "@/app/hooks/useVisibility";

const Experience = () => {
  const { ref: myRef, isVisible } = useVisibility();

  return (
    <div
      ref={myRef}
      className={`flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold text-custom-orange">Experience</h1>
      <a
        href="https://event.multicampus.com/multicampusmain"
        target="_blank"
        className="mt-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 "
      >
        <Image
          className="m-8 rounded-t-lg  md:h-auto md:rounded-none md:rounded-s-lg"
          src="/img/mulcamLogo.webp"
          width={50}
          height={50}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
            멀티잇 프론트엔드 개발 (React 3회차)
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            2023-08-16 - 2023-12-27
          </p>
        </div>
      </a>
      <a
        href="https://www.daelim.ac.kr/intro.do"
        target="_blank"
        className="mt-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 "
      >
        <Image
          className="m-8 rounded-t-lg  md:h-auto md:rounded-none md:rounded-s-lg"
          src="/img/daelimLogo.svg"
          width={50}
          height={50}
          alt=""
        />
        <div className=" flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
            대림대학교 방송음향영상학과 (3년제)
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">2017-03 - 2022-02</p>
        </div>
      </a>
      <div className="border-b-2 w-full m-auto mt-16 border-grey"></div>
    </div>
  );
};

export default Experience;
