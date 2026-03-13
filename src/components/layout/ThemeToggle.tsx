"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.body.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-foreground-secondary transition-colors hover:bg-white/60 hover:text-foreground"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      type="button"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
