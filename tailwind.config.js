/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#58CCED',
          100: '#55C2F1',
          200: '#51B8F9',
          300: '#49A7F6',
          400: '#3E93DD',
          500: '#337FC4',
          600: '#286BAB',
          700: '#1D5791',
          800: '#124378',
          900: '#072F5F',
        }
      }
    },
  },
  plugins: [],
}
