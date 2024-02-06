'use client'
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { iconSize } from "@/lib/constants";
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(()=> {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null;
  }
  return <div className="cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
    {
      theme === 'light' ? <IoMoon size={iconSize}  /> : <IoSunny size={iconSize}  />
    }
  </div>
}

export default ThemeToggle