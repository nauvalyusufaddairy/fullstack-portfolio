/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'xs':"375px",
      'sm':"425px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1440px",
      "2xl":"2560px"

     },
    extend: {
      fontFamily:{
        "burton":"burtons"
      },
     
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation:{
        tray: 'tray 0.5s ease-in-out'
      },
      keyframes:{
        tray:{
          '0%': {
            'height':'0px'
          },
          '100%':{
            'height':"100px"
          }
        }
      }
    },
  },
  plugins: [],
}
