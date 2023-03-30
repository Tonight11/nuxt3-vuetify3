// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@vite-pwa/nuxt'],
	css: [
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
	],
	build: {
		transpile: ['vuetify'],
	},
	head: {
		link: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com',
			},
		],
	},
	pwa: {
		registerType: 'autoUpdate',
		manifest: {
			name: 'My Awesome App',
			short_name: 'MyApp',
			description: 'My Awesome App description',
			theme_color: '#ffffff',
			icons: [
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
			],
		},
		workbox: {
			navigateFallback: '/',
			globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
		},
		devOptions: {
			enabled: true,
		},
	},
});
