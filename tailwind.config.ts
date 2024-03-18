import type {Config} from "tailwindcss";

const config: Config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "linear-dark-blue": "linear-gradient(184.2deg, #1F1559 -0.46%, #030035 42.77%, #1F1559 84.31%)",
          "linear-light-blue": "background: linear-gradient(180deg, #00204F 0%, #0072DC 100%)",
          "linear-orange": "background: linear-gradient(180deg, #DB5B32 0%, #FFC7B6 100%)",

        },
        colors: {
          'light-blue': 'rgba(0, 184, 255, 1)',
          orange: 'rgba(219, 91, 50, 1)',
          light: 'rgba(241, 251, 255, 1)',
          'dark-blue': 'rgba(5, 0, 33, 1)',
        },
      },

    },
  plugins: [],
  };
export default config;
