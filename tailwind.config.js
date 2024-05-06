/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          1: "var(--background-1)",
          2: "var(--background-2)",
        },
        primary: {
          100: "var(--primary-100)",
          500: "var(--primary-500)",
        },
        secondary: {
          100: "var(--secondary-100)",
          500: "var(--secondary-500)",
        },
        accent: {
          100: "var(--accent-100)",
          300: "var(--accent-300)",
          500: "var(--accent-500)",
        },
      },
    },
  },
  plugins: [],
};
