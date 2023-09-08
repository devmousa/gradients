import { useEffect } from "react";
import { Moon, Sun, Github } from "../../svg";

const changeMode = () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
};

const Navbar = () => {

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="w-full p-2 flex flex-row flex-nowrap justify-between sticky top-[0] z-30 backdrop-blur-xl bg-transparent">
      <button
        className="p-1 flex flex-row rounded-full border-2 border-slate-800 dark:border-white bg-stone-50 dark:bg-slate-900"
        onClick={() => changeMode()}
        aria-label="Change Theme"
      >
        <Moon className="w-6 h-6 dark:opacity-0 rotate-0 dark:rotate-45 transition-all duration-300" />
        <Sun className="w-6 h-6 text-amber-50 opacity-0 dark:opacity-100 rotate-45 dark:rotate-0 transition-all duration-300" />
      </button>

      <a href="https://github.com/devmousa/gradients" target="_blank" className="flex flex-row items-center rounded-full bg-stone-50 dark:bg-slate-900 border-2 border-slate-900 dark:border-stone-50">
        <p className="mx-2 text-sm">Repo Link</p>
        <Github className="w-8 h-8" />
      </a>
    </div>
  );
}

export default Navbar;