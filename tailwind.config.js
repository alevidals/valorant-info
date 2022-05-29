module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/waves.svg')",
      },
      colors: {
        dark: '#101823',
        valorant: '#ff4654',
        dark_accent: '#0D131B',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
