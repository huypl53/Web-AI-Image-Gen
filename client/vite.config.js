import * as path from 'path';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			// { find: '~', replacement: path.resolve(__dirname, './src') },

			{ find: '~', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
		]
	},
	plugins: [react(), eslint()]
});
