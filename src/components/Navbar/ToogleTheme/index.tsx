import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="h-10 mx-5 sm:mx-4">
      <motion.div
        className="container"
        whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 1 } }}
        whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
      >
        <MoonIcon
          className="block dark:hidden cursor-pointer h-10 duration-200"
          onClick={toogle}
        />
        <SunIcon
          className="hidden dark:block cursor-pointer h-10 duration-200"
          onClick={toogle}
        />
      </motion.div>
    </div>
  );
}
