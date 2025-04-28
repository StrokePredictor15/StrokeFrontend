import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // Automatically open the app in the browser
  },
  build: {
    rollupOptions: {
      external: ['@react-navigation/native'],
    },
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      react: 'react', // Use direct aliasing instead of require.resolve
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'` // Example of a valid option
  }
});