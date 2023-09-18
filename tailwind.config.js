/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				mooli_sans: ["Mooli", "sans-serif"],
			},
		},
	},
	plugins: [],
};

