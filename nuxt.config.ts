// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxt/icon', '@nuxtjs/i18n'],

	app: {
		head: {
			title: 'ThinkForward',

			meta: [
				{ charset: 'utf-8' },
				{ name: 'application-name', content: 'ThinkForward' },
				{
					name: 'apple-mobile-web-app-title',
					content: 'ThinkForward',
				},
				{
					name: 'viewport',
					content: 'width=device-width,initial-scale=1,user-scalable=yes',
				},
				{ name: 'mobile-web-app-capable', content: 'yes' },
				{
					name: 'apple-mobile-web-app-status-bar-style',
					content: 'black-translucent',
				},
				{ name: 'msapplication-TileColor', content: '#0a0324' },
			],
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: '/favicon.png',
				},
			],
		},
	},
	devtools: { enabled: true },
	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en.json' },
			{ code: 'es', iso: 'es-ES', file: 'es.json' },
			{ code: 'de', iso: 'de-DE', file: 'de.json' },
			{ code: 'pl', iso: 'pl-PL', file: 'pl.json' },
		],
		defaultLocale: 'en',
		lazy: true,
		langDir: 'locales/',
	},
	runtimeConfig: {
		public: {
			gtag: {
				id: 'G-QKVVF5H3H9', // Reemplaza con tu ID de seguimiento
				config: {
					anonymize_ip: true, // Opcional: anonimiza las IPs
					send_page_view: true,
					linker: {
						domains: ['maxxbit.es', 'thinkforward.maxxbit.es'], // Añadir el subdominio aquí
					},
				},
			},
		},
	},
})
