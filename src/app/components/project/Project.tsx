import React from "react";

const Project = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-16 justify-center items-center w-4/5 max-w-5xl">
        <div className="flex border p-4 w-full flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4 ">
          <div className="flex justify-center items-center font-bold">
            PROJECT
          </div>
          <div className="flex flex-col gap-1 text-xs md:text-base">
            <h1>ST.U</h1>
            <p>2023.11.20 ~ 2023.12.21 (FRONTEND 6인)</p>
            <p>
              강의 추천 및 스터디를 모집하고 같이 스터디 모임을 할 수 있는
              사이트입니다.
            </p>
            <p>Next.js TypeScript MongoDB AXIOS NEXT-AUTH CSS-MODULE</p>
          </div>
        </div>
        <div className="flex border p-4 w-full flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4">
          <div className="flex justify-center items-center font-bold">
            PROJECT
          </div>
          <div className="flex flex-col gap-1 text-xs md:text-base">
            <h1>NewWorld</h1>
            <p>2024.01.04 ~ 2024.03.02 (FRONTEND 1 BACKEND 1)</p>
            <p>퀴즈를 제작하고 타인과 같이 풀어볼 수 있는 사이트입니다.</p>
            <p>Next.js TypeScript SpringBoot MySql AXIOS NEXT-AUTH SCSS</p>
          </div>
        </div>
        <div className="flex border p-4 w-full flex-col bg-white text-black rounded-xl min-h-48 min-w-48 gap-4">
          <div className="flex justify-center items-center font-bold">
            PROJECT
          </div>
          <div className="flex flex-col gap-1 text-xs md:text-base">
            <h1>Portfolio</h1>
            <p>2024.03.21 ~ 2024.03.26</p>
            <p>현재 보고 계신 포트폴리오 사이트입니다.</p>
            <p>Next.js TypeScript Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
