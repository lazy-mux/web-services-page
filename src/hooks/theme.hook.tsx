import { useEffect, useState } from "react";
import { getTheme, setTheme } from "../services/theme";

export default function useThemeHook() {
  const [theme, setNewTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  function toggleTheme() {
    if (theme == "dark") setNewTheme("light");
    else setNewTheme("dark");
  }

  return { theme, toggleTheme };
}
