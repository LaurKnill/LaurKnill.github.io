/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		// Custom dark black-and-red theme (palette generated with Codex, contrast checked against WCAG)
		themes: [
			{
				crimson: {
					"color-scheme": "dark",
					"primary": "#AD3949",
					"primary-content": "#FFF5F5",
					"secondary": "#382B34",
					"secondary-content": "#E8E3E4",
					"accent": "#E598A4",
					"accent-content": "#24171C",
					"neutral": "#292428",
					"neutral-content": "#E8E3E4",
					"base-100": "#141214",
					"base-200": "#1D191C",
					"base-300": "#30272D",
					"base-content": "#E8E3E4",
					"info": "#87B8E6",
					"success": "#8BC8A5",
					"warning": "#E6BE78",
					"error": "#F08D93",
				},
			},
		],
		darkTheme: "crimson",
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
