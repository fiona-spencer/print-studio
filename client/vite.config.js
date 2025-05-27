export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  build: {
    outDir: 'client/dist',
    emptyOutDir: true,
  },
  base: '/',
})
