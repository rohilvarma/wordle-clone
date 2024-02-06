'use client'
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
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
      theme === 'light' ? <IoMoon size={30}  /> : <IoSunny size={30}  />
    }
  </div>
}

export default ThemeToggle