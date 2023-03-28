// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
	],
	build: {
		transpile: ['vuetify'],
	},
	modules: [
		[
			'@nuxtjs/google-fonts',
			{
				families: {
					Inter: true,
					download: true,
					inject: true,
				},
				text: 'Log in to your account',
			},
		],
	],
});
