import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '360px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px',
			'3xl': '1680px',
			'4xl': '1920px',
		},
		extend: {
			backgroundImage: {
				'linear-dark-blue':
					'linear-gradient(184.2deg, #1F1559 -0.46%, #030035 42.77%, #1F1559 84.31%)',
				'linear-light-blue':
					'linear-gradient(180deg, #00204F 0%, #0072DC 100%)',
				'linear-orange':
					'linear-gradient(180deg, #DB5B32 0%, #FFC7B6 100%)',
				'linear-blur':
					'linear-gradient(225.34deg, #1f1559cc 4.417%, #030035cc 47.993%, #1f1559cc 89.861%);',
			},
			colors: {
				'dark-blue': '#050021',
				'light-blue': '#00b8ff',
				blue: '#0166FB',
				light: '#f1fbff',
				orange: '#db5b32',
			},
      backdropBlur: {
        "4px": '4px',
      },
			fontFamily: {
				orbitron: 'var(--font-orbitron)',
				montserrat: 'var(--font-montserrat)',
			},
		},
	},
	plugins: [daisyui],
};

export default config;
