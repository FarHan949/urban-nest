/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOlive: '#B5C99A', // Customize with your preferred hex value
        JackoBean: '#3E362E', // Customize with your preferred hex value
        LightTaupe: '#AC8968',
        CoyoteBrown: '#865D36',
        LiverChestnut: '#93785B'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

