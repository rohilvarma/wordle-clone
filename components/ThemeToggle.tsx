"use client";

import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { iconSize, wordOfTheDay } from "@/utils/constants";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <IoSunny size={iconSize} />
      ) : (
        <IoMoon size={iconSize} />
      )}
    </div>
  );
};

export default ThemeToggle;
