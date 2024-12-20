/** @type {import('tailwindcss').Config} */
module.exports = ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {},
    colors: {
      'color-background': {
        100: "#F2F4F7",
        200: "#E4E7ED"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
})