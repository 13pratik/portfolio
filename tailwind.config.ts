import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            black:{
                DEFAULT: '#000',
                100: '#000319'
            }
        }
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
