/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        boho: {
          bg: '#E0D3BA',
          text: '#2C2523',
          heading: '#1A1513',
          muted: '#5A4F4A',
          primary: '#AC6D35',
          accent: '#B68E52',
        }
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
