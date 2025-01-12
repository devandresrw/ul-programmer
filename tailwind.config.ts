import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "myblack": "#18191A",
        "mbtnglass": "rgba( 255, 255, 255, 0.25 )"
      },
      keyframes: {

      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
