import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 mb-4 md:mb-8 lg:mb-12 xl:mb-16 w-4/5 ">
        <div className="flex border p-4 w-1/2 flex-col bg-white text-black rounded-xl min-h-48 max-w-4xl">
          <div>ABOUT ME</div>
          <div>
            <p>신지수</p>
            <p>1997.05.23</p>
            <p>대림대학교 방송음향영상학부</p>
            <p>음향, 영상 복수전공</p>
          </div>
        </div>
        <div className="flex border p-4 w-1/2 flex-col bg-white text-black rounded-xl min-h-48">
          <div>CHANNEL</div>
          <div>
            <p>https://github.com/catmaker</p>
            <p>notion.io</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 mb-4 w-4/5 ">
        <div className="flex border p-4 w-1/2 flex-col bg-white text-black rounded-xl min-h-48">
          <div>EDUCATION</div>
          <div>
            <p>멀티잇 프론트엔드 개발(React)</p>
          </div>
        </div>
        <div className="flex border p-4 w-1/2 flex-col bg-white text-black rounded-xl min-h-48">
          <div>WORK</div>
          <div>
            <p>엔젤로 음향 쇼핑몰 프론트 유지보수</p>
            <p>2023.06~2023.08</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
