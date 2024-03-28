import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="fixed w-full z-10 flex bg-white text-black min-h-14 items-center justify-center shadow-lg">
        <div className="flex w-90 justify-between">
          <div className="text-base cursor-pointer">👨‍💻 JISU</div>
        </div>
      </div>

      <main className=" bg-white text-black w-full bg-[url('/img/bubble.png')] bg-cover bg-center bg-fixed">
        <div className="flex flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-32">
          <div className="flex w-4/5 justify-center">
            <div className="rounded-full w-52 h-52 bg-gray-200 skeleton" />
          </div>
          <div className="flex w-5/6 mt-6 flex-col p-12">
            <div className="w-24 h-8 skeleton text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold transition-size duration-200 "></div>
            <p className="font-bold mt-4 w-24 h-6 text-xl text-custom-orange skeleton"></p>
            <div className="flex gap-2 items-center">
              <span className="w-80px pr-8 h-4 mt-2 text-sm skeleton"></span>
              <span className="text-custom-gray h-4 w-36 mt-2 text-xs underline skeleton"></span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-80px pr-8 h-4 mt-2 text-sm skeleton"></span>
              <span className="text-custom-gray h-4 w-36 mt-2 text-xs underline skeleton"></span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-80px pr-8 h-4 mt-2 text-sm skeleton"></span>
              <span className="text-custom-gray h-4 w-36 mt-2 text-xs underline skeleton"></span>
            </div>
            <p className="font-bold mt-4 w-24 h-6 text-xl text-custom-orange skeleton"></p>
            <div className="flex gap-2 items-center">
              <span className="w-80px pr-8 h-4 mt-2 text-sm skeleton"></span>
              <span className="text-custom-gray h-4 w-36 mt-2 text-xs underline skeleton"></span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-80px pr-8 h-4 mt-2 text-sm skeleton"></span>
              <span className="text-custom-gray h-4 w-36 mt-2 text-xs underline skeleton"></span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-80px pr-8 h-4 mt-2 text-sm skeleton"></span>
              <span className="text-custom-gray h-4 w-36 mt-2 text-xs underline skeleton"></span>
            </div>
          </div>
        </div>
        <div className="border-b-2 w-4/5 m-auto mt-16 border-grey"></div>

        <>
          <div className="flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-1000">
            <p className="text-4xl w-52 h-10 font-bold text-custom-orange skeleton"></p>
            <div>
              <p className="text-sm sm:text-base leading-relaxed mt-4 w-full h-6 skeleton"></p>
              <p className="text-sm sm:text-base leading-relaxed mt-4 w-full h-6 skeleton"></p>
              <p className="text-sm sm:text-base leading-relaxed mt-4 w-full h-6 skeleton"></p>
              <p className="text-sm sm:text-base leading-relaxed mt-4 w-full h-6 skeleton"></p>
            </div>
          </div>
          <div className="border-b-2 w-4/5 m-auto mt-16 border-grey"></div>
        </>

        <div className="flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-3500">
          <p className="text-4xl w-52 h-10 font-bold text-custom-orange skeleton"></p>
          <div className="skeleton h-32 cursor-pointer mt-6 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100">
            <div className="m-8 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg w-32 h-32 skeleton" />
            <div className="flex flex-col justify-between p-4 leading-normal"></div>
          </div>
          <div className="skeleton h-32 cursor-pointer mt-6 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100">
            <div className="m-8 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg w-32 h-32 skeleton" />
            <div className="flex flex-col justify-between p-4 leading-normal"></div>
          </div>
          <div className="skeleton h-32 cursor-pointer mt-6 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100">
            <div className="m-8 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg w-32 h-32 skeleton" />
            <div className="flex flex-col justify-between p-4 leading-normal"></div>
          </div>
          <div className="border-b-2 w-full m-auto mt-16 border-grey"></div>
        </div>

        <div className="flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-3500">
          <p className="text-4xl w-52 h-10 font-bold text-custom-orange skeleton"></p>
          <div className="skeleton h-32 cursor-pointer mt-6 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100">
            <div className="m-8 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg w-32 h-32 skeleton" />
            <div className="flex flex-col justify-between p-4 leading-normal"></div>
          </div>
          <div className="skeleton h-32 cursor-pointer mt-6 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100">
            <div className="m-8 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg w-32 h-32 skeleton" />
            <div className="flex flex-col justify-between p-4 leading-normal"></div>
          </div>
        </div>

        <div className="flex-col md:flex-row text-black w-4/5 m-auto min-h-20 items-center justify-center pt-12 transition-opacity transition-transform duration-3500">
          <p className="text-4xl w-52 h-10 font-bold text-custom-orange skeleton"></p>
          <div className="skeleton h-32 cursor-pointer mt-6 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100">
            <div className="m-8 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg w-32 h-32 skeleton" />
            <div className="flex flex-col justify-between p-4 leading-normal"></div>
          </div>
          <div className="skeleton h-32 cursor-pointer mt-6 flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row duration-1000 hover:bg-gray-100">
            <div className="m-8 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg w-32 h-32 skeleton" />
            <div className="flex flex-col justify-between p-4 leading-normal"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Skeleton;
