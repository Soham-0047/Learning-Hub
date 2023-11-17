import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
//http://localhost:5000
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:'https://learning-hub.onrender.com',
        secure:false,
      },
    },
  },
  plugins: [react()],
})
