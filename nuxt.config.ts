export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt', '@nuxt/icon', '@nuxtjs/i18n'],

	app: {
		head: {
			title: 'ThinkForward',
			meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
		},
	},

	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en.json' },
			{ code: 'es', iso: 'es-ES', file: 'es.json' },
			{ code: 'de', iso: 'de-DE', file: 'de.json' },
			{ code: 'pl', iso: 'pl-PL', file: 'pl.json' },
		],
		defaultLocale: 'es',
		strategy: 'prefix_except_default',
	},

	runtimeConfig: {
		public: {
			gtag: {
				id: 'G-0B4H54HJ64',
				config: {
					send_page_view: true,
					linker: { domains: ['maxxbit.es', 'thinkforward.maxxbit.es'] },
				},
			},
		},
	},
})
