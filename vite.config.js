import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Fruit-React-Tailwind/', // هذا يجب أن يتوافق مع اسم الريبو على GitHub
});
