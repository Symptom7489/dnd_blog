/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dnd-head': ['Cinzel', 'Garamond', 'serif'],
        'dnd-body': ['IM Fell English SC', 'Georgia', 'serif'],
      },
      colors: {
        'darkest': '#0B090A',
        'dark-gray': '#161A1D',
        'red-deep': '#660708',
        'red-dark': '#A4161A',
        'red-primary': '#BA181B',
        'red-bright': '#E5383B',
        'gray-medium': '#B1A7A6',
        'gray-light': '#D3D3D3',
        'off-white': '#F5F3F4',
      },
    },
  },
  plugins: [],
}
