/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'color-primario': '#F0F0F0',
				'color-secundario': '#854CFF',
				'color-terciario': '#FF5757',
				'color-quaternario': '#716F6F',
				'color-primario-dark': '#202325',
				'color-secundario-dark': '#0F0F0F',
			},
		},
	},
	plugins: [],
}
