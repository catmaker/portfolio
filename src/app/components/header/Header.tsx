"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed w-full z-10 flex  text-black min-h-14 items-center justify-center shadow-lg  ${
        isVisible ? "" : "hidden"
      }`}
    >
      <div className="flex w-90 justify-between">
        <div className="text-base cursor-pointer">👨‍💻 JISU</div>
        <div className="flex items-center">
          <ul className="flex gap-4">
            <li className="transition-colors duration-200 hover:text-custom-orange">
              <Link href="#intro">Home</Link>
            </li>
            <li className="transition-colors duration-200 hover:text-custom-orange">
              <Link href="#about">About</Link>
            </li>
            <li className="transition-colors duration-200 hover:text-custom-orange">
              <Link href="#experience">Experience</Link>
            </li>
            <li className="transition-colors duration-200 hover:text-custom-orange">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
