/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#001f3f',
        'cream-white': '#f5f5dc',
        'vibrant-orange': '#ff851b',
        'orange-600': '#e67e22',
      },
    },
  },
  plugins: [],
}