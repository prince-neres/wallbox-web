import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme() {
  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("darkMode") || "{}");
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  const toogle = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "darkMode",
      document.documentElement.classList.contains("dark").toString()
    );
  };

  return (
    <div className="h-10 rounded-full pr-8 sm:p-0 select-none">
      <MoonIcon
        className="block dark:hidden cursor-pointer h-10 duration-200"
        onClick={toogle}
      />
      <SunIcon
        className="hidden dark:block cursor-pointer h-10 duration-200"
        onClick={toogle}
      />
    </div>
  );
}
