// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
});
