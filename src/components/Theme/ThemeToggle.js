import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const [mounted,setMounted] = useState(false);

  const { theme, setTheme } = useTheme();


  useEffect(()=>{

    setMounted(true)

  },[])

   if(!mounted){
    return null
   }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // const currentTheme = theme==='system'?systemTheme:theme;
  return (
    <div>
      <label className="flex cursor-pointer select-none items-center mr-2">
        <div className="relative">
      
          
          <input
            type="checkbox"
            checked={theme}
            onChange={toggleTheme}
            className="sr-only"
          />
          <div
            className={`box block h-7 w-12 rounded-full ${
              theme ==='dark'  && typeof window !== 'undefined' ? "dark:bg-light " : "  bg-gray-200"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full dark:bg-dark bg-white transition ${
              theme==='dark'  && typeof window !== 'undefined'  ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
