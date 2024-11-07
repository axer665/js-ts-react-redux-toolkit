import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

const cherryPickedKeys = [
  'REACT_APP_BASE_URL',
  'REACT_APP_API_KEY_1',
  'REACT_APP_API_KEY_2'
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          implementation: sass,
          api: 'modern-compiler' // or "modern"
        },
      },
    },
  }
})
