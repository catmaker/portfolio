import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 mb-4 md:mb-8 lg:mb-12 xl:mb-16 w-4/5 max-w-5xl">
        <div className="flex border p-4 w-1/2 flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4 transition-shadow duration-300 hover:shadow-lg hover:animate-shake shadow-md">
          <div className="flex justify-center items-center font-bold">
            ABOUT ME
          </div>
          <div className="flex flex-col gap-1 text-xs md:text-base">
            <p>신지수</p>
            <p>1997.05.23</p>
            <p>대림대학교 방송음향영상과</p>
            <p className="text-xs">음향, 영상 복수전공</p>
          </div>
        </div>
        <div className="flex border p-4 w-1/2 flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4 transition-shadow duration-300 hover:shadow-lg hover:animate-shake shadow-md">
          <div className="flex justify-center items-center font-bold">
            CHANNEL
          </div>
          <div className="flex flex-col gap-1 text-xs md:text-base">
            <a href="https://github.com/catmaker" target="_blank">
              https://github.com/catmaker
            </a>
            <a href="notion.io" target="_blank">
              notion.io
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 mb-4 md:mb-8 lg:mb-12 xl:mb-16 w-4/5 max-w-5xl">
        <div className="flex border p-4 w-1/2 flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4 transition-shadow duration-300 hover:shadow-lg hover:animate-shake shadow-md">
          <div className="flex justify-center items-center font-bold">
            EDUCATION
          </div>
          <div className="flex flex-col gap-1 text-xs md:text-base">
            <p className="text-xs">2023-08-16 - 2023-12-27</p>
            <p>멀티잇 프론트엔드 개발(React)</p>
          </div>
        </div>
        <div className="flex border p-4 w-1/2 flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4 transition-shadow duration-300 hover:shadow-lg hover:animate-shake shadow-md">
          <div className="flex justify-center items-center font-bold">WORK</div>
          <div className="flex flex-col gap-1 text-xs md:text-base">
            <p className="text-xs">2023.06~2023.08</p>
            <p className="md:hidden">엔젤로 음향 쇼핑몰</p>
            <p className="hidden md:block">
              엔젤로 음향 쇼핑몰 프론트 유지보수
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
