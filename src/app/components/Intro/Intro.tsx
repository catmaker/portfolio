import Image from "next/image";
import React from "react";
const Intro = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-32">
        <div className="flex w-4/5 justify-center">
          <Image
            className="rounded-full"
            src="/img/profile.jpg"
            width={200}
            height={200}
            sizes="100vw"
            alt=""
          />
        </div>
        <div className="flex w-5/6 mt-6 flex-col p-12">
          <h3 className=" text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold transition-size duration-200 ">
            신지수 (Shin Ji Su)
          </h3>
          <p className="font-bold mt-4 text-xl text-custom-orange">Contact</p>
          <div className="flex gap-2 items-center">
            <span className="w-80px pr-8 text-sm">phone.</span>
            <span className="text-custom-gray text-xs underline text-custom-gray">
              010-4951-4437
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-80px pr-8 text-sm">email.</span>
            <span className="text-custom-gray text-xs underline text-custom-gray">
              rzt0357@gmail.com
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-80px pr-9 text-sm">github.</span>
            <span className="hover:text-custom-orange transition-colors duration-200 text-custom-gray text-xs underline text-custom-gray">
              <a href="https://github.com/catmaker" target="_blank">
                https://github.com/catmaker
              </a>
            </span>
          </div>
          <p className="font-bold mt-4 text-xl text-custom-orange">Skill</p>
          <div className="flex gap-2 items-center">
            <span className="w-80px pr-8 text-sm">Deploy.</span>
            <span className="text-custom-gray text-xs underline text-custom-gray">
              Firebase, Vercel
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-80px pr-8 text-sm">Language.</span>
            <span className="text-custom-gray text-xs underline text-custom-gray">
              Typescript, Javascript, Styled-Component
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-80px pr-8 text-sm">FW/LB.</span>
            <span className="text-custom-gray text-xs underline text-custom-gray">
              Next.js, React, Node.js
            </span>
          </div>
        </div>
      </div>
      <div className="border-b-2 w-4/5 m-auto mt-16 border-grey"></div>
    </>
  );
};

export default Intro;
