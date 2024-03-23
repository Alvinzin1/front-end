/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5EBC67',
        // 'secondary': '#009fb7',
        'light': '#f7f7f7',
        'dark': '#152232',
      },
    },
  },
  plugins: [],
}