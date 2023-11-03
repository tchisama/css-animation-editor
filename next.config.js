/** @type {import('next').NextConfig} */
const config = {
    content: [
      // ...
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    darkMode: "class",
    plugins: [nextui()]
  }
  
  

module.exports = config
