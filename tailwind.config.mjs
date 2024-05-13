/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        wine: "#872341",
        "wine-secondary": "#22092C",
        "wine-secondary-dark": "#ecd9f3",
        translucent: "#F05941",
      },
    },
  },
  plugins: [],
};
