/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    
  theme: {
    extend: {
      colors: {
        'DarkGray': 'hsl(0, 0%, 63%)',
        'VeryDarkGray': 'hsl(0, 0%, 27%)'
      }
    },
  },
  plugins: [],
}

