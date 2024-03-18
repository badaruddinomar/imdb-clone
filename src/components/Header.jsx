import React from "react";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <header className="w-full h-[90px] flex items-center justify-between px-[20px] md:px-[40px] lg:px-[60px]">
      {/* logo-- */}
      <div>
        <Link href="/">
          <span className="text-[20px] font-bold p-2 bg-[gold] rounded-md">
            IMDb
          </span>
          <span className="font-bold"> Clone</span>
        </Link>
      </div>
      {/* header links-- */}
      <div className="flex items-center">
        <DarkModeSwitch />
        <Link href="/" className="mx-[20px]">
          Home
        </Link>
        <Link href="/about" className="mx-[20px]">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
