"use client";
import Image from "next/image";
import { useState } from "react";

import useVisibility from "@/app/hooks/useVisibility";

const Project = () => {
  const { ref: myRef, isVisible } = useVisibility();
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);
  const [isThirdDivVisible, setIsThirdDivVisible] = useState(false);

  const handleClick = () => {
    setIsDivVisible(!isDivVisible);
  };

  const handleClickSecond = () => {
    setIsSecondDivVisible(!isSecondDivVisible);
  };

  const handleClickThird = () => {
    setIsThirdDivVisible(!isThirdDivVisible);
  };

  return (
    <div
      ref={myRef}
      className={`flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-3500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold text-custom-orange">Project</h1>
      <div
        className={`cursor-pointer mt-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100 ${isDivVisible ? "bg-custom-orange" : ""}`}
        onClick={handleClick}
      >
        <Image
          className="m-8 rounded-t-lg  md:h-auto md:rounded-none md:rounded-s-lg"
          src="/img/stuLogo.svg"
          width={110}
          height={110}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
            ST.U
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            2023-11-20 - 2023-12-21
          </p>
          <p className="mb-3 font-normal text-gray-700 ">
            강의 추천 및 스터디를 모집하고 같이 스터디 모임을 할 수 있는
            사이트입니다.
          </p>
        </div>
      </div>
      {isDivVisible && (
        <div className="mt-6 flex flex-col p-9 bg-white border border-gray-200 rounded-lg shadow duration-1000 hover:bg-gray-100 ">
          <div className="flex">
            <p className="justify-center items-center">ST.U</p>
            <div>
              <p className="ml-8">ST.U</p>
              <p className="ml-8 mt-2">
                강의 추천 및 스터디를 모집하고 같이 스터디 모임을 할 수 있는
                사이트
              </p>
            </div>
          </div>
          <div className="p-2 flex mt-4">
            <p className="w-120px font-bold">개발 기간</p>
            <span className="ml-4">2023.11.20 ~ 2023.12.21 (4주)</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">플랫폼</p>
            <span className="ml-4">Web</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">개발 인원</p>
            <span className="ml-4">6명</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">담당 역할</p>
            <p className="ml-4 text-sm leading-relaxed text-gray-800">
              로그인 및 회원 관리 백엔드 개발 <br />
              MongoDB 연동 및 스키마 정의 <br />
              이미지 업로드 및 Cloudinary 통합 <br />
              마이페이지 프론트 및 백엔드 개발 <br />
              회원 탈퇴 및 세션 관리 기능 개발 <br />글 작성 crud 기능 개발
            </p>
          </div>
          <div className="p-2 flex flex-col">
            <p className="font-bold">프로젝트 소개</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              ST.U는 &quot;당신과 함께 스터디를 하자&quot; 라는 의미로, 다양한
              직업에 관련된 종사자들이나 자격증, 취업 등을 주제로 스터디 모집을
              하고 공부 노트나 스터디 가입자들 만이 이용 가능한 개인적인
              커뮤니티 기능을 개발했습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              빠른 정보 탐색을 위한 무한 스크롤과 필터링을 구현하였고 또한
              다양한 키워드 검색을 서비스 유입으로 연결시키기 위해 Next.js로
              진행했습니다.
            </p>
          </div>
          <div className="p-2 flex flex-col">
            <p className="font-bold">회고</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              이번 프로젝트에서는 NextAuth와 MongoDB의 호환 문제로 인해 도전적인
              상황을 겪었습니다.
              <br /> 팀원들과 함께 몽구스 버전을 다운그레이드하는 과정에서
              백엔드 관련 문제를 직접 해결하면서 소중한 경험을 쌓을 수
              있었습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              이미지 업로드 문제는 네트워크 속도와 서버 성능을 검토하여
              최적화하는 과정을 통해 성공적으로 해결했습니다.
              <br /> 또한, 이미지 URL 관리와 보안 문제를 고려하여 클라이언트에
              안전하게 이미지를 제공할 수 있는 시스템을 구축하는 데
              성공했습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              이번 프로젝트를 통해 백엔드 개발 및 문제 해결 능력을 향상시키는 데
              큰 도움이 되었고, 팀원들과의 협업 능력도 향상시킬 수 있었습니다.
            </p>
          </div>

          <div className="p-2 flex flex-col">
            <p className="font-bold">기술 스택</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              Next.js, TypeScript, React-query, Axios, MongoDB, Notion, Figma,
              GitHub, Cloudinary, NextAuth, CSSModule, Discord
            </p>
          </div>

          <div className="p-2 flex flex-col">
            <p className="font-bold">GitHub Repository</p>
            <a
              href="https://github.com/e4-project/final-e4?tab=readme-ov-file"
              target="_blank"
              className="mt-4 text-sm leading-relaxed text-gray-800 hover:text-custom-orange duration-200"
            >
              https://github.com/e4-project/final-e4?tab=readme-ov-file
            </a>
          </div>
          <div className="p-2 flex flex-col">
            <p className="font-bold">Link</p>
            <a
              href="https://st-u.vercel.app/"
              target="_blank"
              className="mt-4 text-sm leading-relaxed text-gray-800 hover:text-custom-orange duration-200"
            >
              https://st-u.vercel.app/
            </a>
          </div>
        </div>
      )}
      <div
        className={`cursor-pointer mt-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100 ${isSecondDivVisible ? "bg-custom-orange" : ""}`}
        onClick={handleClickSecond}
      >
        <Image
          className="m-8 rounded-t-lg  md:h-auto md:rounded-none md:rounded-s-lg"
          src="/img/newworld.svg"
          width={110}
          height={110}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
            New World
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            2024-01-10 - 2024-03-10
          </p>
          <p className="mb-3 font-normal text-gray-700 ">
            유저가 직접 퀴즈를 제작하고 풀 수 있는 퀴즈 플랫폼입니다.
          </p>
        </div>
      </div>
      {isSecondDivVisible && (
        <div className="mt-6 flex flex-col p-9 bg-white border border-gray-200 rounded-lg shadow duration-1000 hover:bg-gray-100 ">
          <div className="flex">
            <Image
              src="img/newworld.svg"
              width={110}
              height={110}
              alt="newworldLogo"
            ></Image>
            <div>
              <p className="ml-8">New World</p>
              <p className="ml-8 mt-2">
                유저가 직접 퀴즈를 제작하고 풀 수 있는 퀴즈 플랫폼
              </p>
            </div>
          </div>
          <div className="p-2 flex mt-4">
            <p className="w-120px font-bold">개발 기간</p>
            <span className="ml-4">2024.01.10 ~ 2024.03.10 (2달)</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">플랫폼</p>
            <span className="ml-4">Web</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">개발 인원</p>
            <span className="ml-4">2명</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">담당 역할</p>
            <p className="ml-4 text-sm leading-relaxed text-gray-800">
              프론트엔드 개발 (100%)
            </p>
          </div>
          <div className="p-2 flex flex-col">
            <p className="font-bold">프로젝트 소개</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              은근히 많은 사람들이 웹으로 회사에서 잠깐 쉬는 시간에 퀴즈를
              푼다던지 하는 경우가 많은 것을 보고 생각하고 진행한
              프로젝트입니다. <br /> 플레이어들이 자신만의 퀴즈를 제작하고, 다른
              이들이 그 퀴즈를 즐기며 새로운 지식과 재미를 얻을 수 있는 독특한
              경험을 제공합니다. <br /> 유저가 주도적으로 참여하고 기여하는
              새로운 형태의 퀴즈 플레이 게임으로, 커뮤니티도 제공하여 모두가
              함께 즐기며 성장할 수 있는 공간을 만들어 나가겠다는 생각으로
              만들었습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              유저가 많아야 진행이 되는 아이디어인 이상 다양한 키워드 검색을
              서비스 유입으로 연결시키기 위해 Next.js로 진행했습니다.
            </p>
          </div>
          <div className="p-2 flex flex-col">
            <p className="font-bold">회고</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              프로젝트를 현직 백엔드 개발자와 2인으로 진행하면서, 데이터 처리와
              소통 과정에서 다양한 경험을 쌓았습니다.
              <br /> 백엔드 개발자와의 협업에서 데이터 처리는 중요한
              부분이었는데, 백엔드에서는 데이터를 효율적으로 처리하고 API를 통해
              프론트엔드에 전달해야 했습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              이러한 과정에서 프론트엔드와 백엔드 간의 원활한 소통이
              필수적이었습니다.
              <br /> 데이터 구조 및 필요한 정보에 대한 명확한 이해가 필요했고,
              이를 위해 정기적인 미팅과 문서화된 요구사항이 큰 도움이
              되었습니다. <br /> 또한, 개발 과정에서 발생하는 문제나 변경 사항에
              대한 적극적인 소통이 프로젝트 진행에 도움이 되었습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              이번 프로젝트에서는 소셜 로그인이 아닌 사이트에서 직접 제공하는
              로그인 서비스를 구현하는 것이 어려웠습니다.
              <br />
              이전에는 주로 백엔드에 집중하여 프론트엔드의 역할을 덜 경험했기
              때문에 프론트엔드 전반을 맡는 것이 새로운 도전이었습니다.
              <br /> 프론트엔드에서는 사용자 인터페이스를 설계하고, 사용자의
              입력을 받아 백엔드로 전달하는 것뿐만 아니라, 백엔드로부터 받은
              데이터를 적절히 가공하여 사용자에게 제공하는 역할을 맡았습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              이러한 경험을 통해 프론트엔드와 백엔드 간의 상호 의존적인 관계를
              깊이 이해하게 되었고, 프로젝트 전반에 걸친 개발 경험을 쌓을 수
              있었습니다.
            </p>
          </div>

          <div className="p-2 flex flex-col">
            <p className="font-bold">기술 스택 / 툴</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              Next.js, TypeScript, Axios, SCSS, MySql, SpringBoot, Notion,
              Figma, GitHub, Discord
            </p>
          </div>

          <div className="p-2 flex flex-col">
            <p className="font-bold">GitHub Repository</p>
            <a
              href="https://github.com/minimalmocha/newworld"
              target="_blank"
              className="mt-4 text-sm leading-relaxed text-gray-800 hover:text-custom-orange duration-200"
            >
              https://github.com/minimalmocha/newworld
            </a>
          </div>
          <div className="p-2 flex flex-col">
            <p className="font-bold">Link</p>
            <a
              href="https://minimalmocha-newworld.vercel.app/"
              target="_blank"
              className="mt-4 text-sm leading-relaxed text-gray-800 hover:text-custom-orange duration-200"
            >
              https://minimalmocha-newworld.vercel.app
            </a>
          </div>
        </div>
      )}
      <div
        className={`cursor-pointer mt-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100 ${isThirdDivVisible ? "bg-custom-orange" : ""}`}
        onClick={handleClickThird}
      >
        <Image
          className="m-8 rounded-t-lg  md:h-auto md:rounded-none md:rounded-s-lg"
          src="/img/developer.png"
          width={110}
          height={110}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
            Portfolio
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            2024-03-21 - 2024-03-26
          </p>
          <p className="mb-3 font-normal text-gray-700 ">
            현재 보고 계신 포트폴리오 사이트입니다.
          </p>
        </div>
      </div>
      {isThirdDivVisible && (
        <div className="mt-6 flex flex-col p-9 bg-white border border-gray-200 rounded-lg shadow duration-1000 hover:bg-gray-100 ">
          <div className="flex">
            <p className="justify-center items-center">Portfolio</p>
            <div>
              <p className="ml-8">Portfolio</p>
              <p className="ml-8 mt-2">
                현재 보고 계신 포트폴리오 사이트입니다.
              </p>
            </div>
          </div>
          <div className="p-2 flex mt-4">
            <p className="w-120px font-bold">개발 기간</p>
            <span className="ml-4">2024.03.21 ~ 2024.03.26 (6일)</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">플랫폼</p>
            <span className="ml-4">Web</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">개발 인원</p>
            <span className="ml-4">1명</span>
          </div>
          <div className="p-2 flex">
            <p className="w-120px font-bold">담당 역할</p>
            <p className="ml-4 text-sm leading-relaxed text-gray-800">전체</p>
          </div>
          <div className="p-2 flex flex-col">
            <p className="font-bold">프로젝트 소개</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              회사 취업을 위한 포트폴리오입니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              Next.js를 사용하여 취업을 위한 포트폴리오를 개발한 이유는 취업
              시장에서 기술적인 경쟁력을 강화하고자 했기 때문입니다. Next.js는
              현대적이고 성능 최적화된 웹 애플리케이션을 쉽게 개발할 수 있는
              강력한 프레임워크라 생각합니다.
            </p>
          </div>
          <div className="p-2 flex flex-col">
            <p className="font-bold">회고</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              이번 포트폴리오 작성을 통해 제가 사용한 기술들과 프로젝트를
              진행하면서 느꼈던 경험들을 간략하게 정리하면서 개발했습니다.
              <br />
              지난 학원에서의 경험과 두 개의 프로젝트에서는 다양한 기술을
              활용하여 웹 애플리케이션을 개발하였습니다. 학원에서는 React와
              Node.js를 기반으로 한 개발을 경험했습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              첫 번째 프로젝트에서는 Next.js를 사용하여 백엔드와 프론트엔드를
              개발하였고,
              <br /> 백엔드와 프론트엔드 간의 데이터 흐름을 이해하고, MongoDB를
              사용하여 데이터베이스를 구축하는 경험을 쌓았습니다. <br />
              프론트엔드 과정이었지만 백엔드를 지원하여 경험함으로써, 색다르고
              다양한 경험을 할 수 있었습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              두 번째 프로젝트에서는 프론트엔드를 개발하였고,
              <br /> 백엔드와 프론트엔드 간의 데이터 흐름을 이해하고, 백엔드
              개발자와 소통하는 방법을 배울 수 있었습니다.
              <br /> 이러한 경험을 통해 프로젝트 전반에 걸친 개발 경험을 쌓을 수
              있었습니다.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              마지막 프로젝트에서는 Next.js를 사용하여 포트폴리오를
              구현하였습니다.
              <br /> 원페이지 디자인을 통해 보시는만큼 간결하고 깔끔하게 디자인
              하기 위해 노력했습니다.
              <br /> 또한 써보지 않은 Tailwind와 Framer를 사용하여 디자인을
              구현하였습니다.
            </p>
          </div>

          <div className="p-2 flex flex-col">
            <p className="font-bold">기술 스택</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-800">
              Next.js, TypeScript, Framer, GitHub
            </p>
          </div>

          <div className="p-2 flex flex-col">
            <p className="font-bold">GitHub Repository</p>
            <a
              href="https://github.com/catmaker/portfolio"
              target="_blank"
              className="mt-4 text-sm leading-relaxed text-gray-800 hover:text-custom-orange duration-200"
            >
              https://github.com/catmaker/portfolio
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
