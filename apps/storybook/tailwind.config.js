/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('../../packages/ui/tailwind.config.js'),
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    '../../packages/ui/src/**/*.{ts,tsx,js,jsx}',
  ],
}

