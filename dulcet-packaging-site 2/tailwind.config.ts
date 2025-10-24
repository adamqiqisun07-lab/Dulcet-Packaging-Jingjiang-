import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          blue: "#1B4B82",
          gray: "#B7C0CC"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
export default config;
