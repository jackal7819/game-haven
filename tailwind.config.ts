import type {Config} from "tailwindcss";

const config: Config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        'sm': '360px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
      },
      extend: {
        backgroundImage: {
          "linear-dark-blue": "linear-gradient(184.2deg, #1F1559 -0.46%, #030035 42.77%, #1F1559 84.31%)",
          "linear-light-blue": "linear-gradient(180deg, #00204F 0%, #0072DC 100%)",
          "linear-orange": "linear-gradient(180deg, #DB5B32 0%, #FFC7B6 100%)",
          "linear-blur": "linear-gradient(225.34deg, rgba(31, 21, 89, 0.8) 4.417%,rgba(3, 0, 53, 0.8) 47.993%,rgba(31, 21, 89, 0.8) 89.861%);",
        },
        colors: {
          'light-blue': 'rgba(0, 184, 255, 1)',
          'orange': 'rgba(219, 91, 50, 1)',
          'light': 'rgba(241, 251, 255, 1)',
          'dark-blue': 'rgba(5, 0, 33, 1)',
        },
        fontFamily: {
          'orbitron': 'var(--font-orbitron)',
          'montserrat': 'var(--font-montserrat)',
        },
      },

    },
  plugins: [],
  };
export default config;
