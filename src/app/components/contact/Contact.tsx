"use client";
import Image from "next/image";
import React from "react";

import useVisibility from "@/app/hooks/useVisibility";

const Contact = () => {
  const { ref: myRef, isVisible } = useVisibility();

  return (
    <div
      ref={myRef}
      className={`flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold text-custom-orange">Contact</h1>
      <a
        href="https://mail.google.com/"
        target="_blank"
        className="mt-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 "
      >
        <Image
          className="m-8 rounded-t-lg  md:h-auto md:rounded-none md:rounded-s-lg"
          src="/img/gmail.svg"
          width={50}
          height={50}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
            Gmail
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">rzt0357@gmail.com</p>
        </div>
      </a>
      <a
        href="#"
        className="mt-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 "
      >
        <Image
          className="m-8 rounded-t-lg  md:h-auto md:rounded-none md:rounded-s-lg"
          src="/img/iphone.png"
          width={50}
          height={50}
          alt=""
        />
        <div className=" flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
            Phone Number
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">010-4951-4437</p>
        </div>
      </a>
      <div className="border-b-2 w-full m-auto mt-16 border-grey"></div>
    </div>
  );
};

export default Contact;
