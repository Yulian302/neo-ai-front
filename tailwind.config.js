/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      success_0: "#65a30d",
      success_1: "#1d4ed8",
      success_2: "#f97316",
      success_3: "#e01010",
      "background-color": "var(--background-color)",
      "foreground-color": "var(--foreground-color)",
      "primary-text-color": "var(--primary-text-color)",
      "secondary-text-color": "var(--secondary-text-color)",
      "toggle-bg": "var(--toggle-bg)",
      "header-background-color": "var(--header-background-color)",
    },
  },
  plugins: [],
};
