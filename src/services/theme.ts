export function getTheme(): string {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme")!;
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function setTheme(theme?: string): void {
  if(!theme) theme = getTheme();
  
  window.localStorage.setItem("theme", theme);
  if (theme == "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
}

export function toggleTheme(): void {
  const theme = getTheme() == "light" ? "dark" : "light";
  setTheme(theme);
}