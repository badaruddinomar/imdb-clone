"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mountend, setMountend] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMountend(true);
  }, []);
  return (
    <div>
      {mountend &&
        (currentTheme === "dark" ? (
          <IoSunnyOutline
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <IoMoonOutline
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default DarkModeSwitch;
