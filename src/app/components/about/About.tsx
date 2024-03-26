"use client";
import React from "react";

const About = () => {
  return (
    <>
      <div className="flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-1000">
        <h1 className="text-4xl font-bold text-custom-orange">Introduction</h1>
        <div>
          <p className="text-sm sm:text-base leading-relaxed mt-4">
            안녕하세요, 프론트엔드 지망생 신지수입니다.
            <br /> 최근 8개월간 프론트엔드 개발에 몰두하여 3개의 프로젝트를
            진행하며 열정을 키웠습니다.
            <br /> 개발스터디를 통해 팀원들과 적극적인 활동을 통해 성장하고
            있습니다.
            <br /> 사용자 중심의 인터페이스와 탁월한 경험을 만들기 위해 노력하고
            있으며,
            <br /> 현업에서 활약하기 위해 지속적인 학습과 개발을 하고 있습니다.
          </p>
        </div>
      </div>
      <div className="border-b-2 w-4/5 m-auto mt-16 border-grey"></div>
    </>
  );
};

export default About;
