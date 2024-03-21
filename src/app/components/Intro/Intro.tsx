import React from "react";
import Image from "next/image";
const Intro = () => {
  return (
    <div className="flex text-white min-h-20 items-center justify-center flex-col">
      <div className="flex w-4/5 justify-center mt-48">
        <Image
          className="rounded-full"
          src="/img/profile.jpg"
          alt=""
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="flex w-4/5 flex-col justify-center items-center mt-10">
        <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-press-start font-bold transition-size duration-200">
          FRONTEND DEVELOPER
        </h3>
        <p className="text-lg font-bold mt-1">신지수</p>
      </div>
    </div>
  );
};

export default Intro;
