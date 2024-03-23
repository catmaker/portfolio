import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full z-10 flex text-black min-h-20 items-center justify-center">
      <div className="flex w-4/5 justify-between">
        <div className="text-3xl">JISU</div>
        <div className="flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
