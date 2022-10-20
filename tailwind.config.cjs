/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'mirage': '#101826',
        'greenish' : '#30E0CB',
        'smoke': '#F4F4F4F4'
      },
    },
	},
	plugins: [],
}
