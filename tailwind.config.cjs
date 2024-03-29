/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mirage: '#101826',
        greenish: '#30E0CB',
        smoke: '#F4F4F4F4',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 20px)' },
          '100%': { transform: 'translate(0, -0px)' },
        },
      },
      animation: {
        floating: 'float 2s ease-in-out infinite',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      sourcecode: ['Source Code Pro', 'monospace'],
    },
    screens: {
      xxs: '320px',
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
