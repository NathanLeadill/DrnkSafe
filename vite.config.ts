import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "$styles/variables.scss";',

			}
		},
	},
	resolve: {
		alias: {
			'$styles': '/src/lib/styles',
			'$components': '/src/lib/components',
			'$stores': '/src/lib/stores',
			'$utils': '/src/lib/utils',
			'$routes': '/src/routes'
		}
	},
});
