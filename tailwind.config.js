// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
    
//     extend: {
//       colors:{
//         primary: "#5D87FF",
//       }
//     },
//   },
//   plugins: [],
// }

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        setprimary: "#0052FF",
      }
    },
  },
  plugins: [
    tailwindcss(),
  ],
})


// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',  
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#0052FF',
//       },
//     },
//   },
//   plugins: [],
// }

// export default config