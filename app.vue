<script setup>
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useHead } from '#imports'

useHead({
	script: [
		{
			src: `https://www.googletagmanager.com/gtag/js?id=G-0B4H54HJ64`,
			async: true,
		},
		{
			children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0B4H54HJ64', {
          linker: { domains: ['maxxbit.es', 'thinkforward.maxxbit.es'] }
        });
      `,
			type: 'text/javascript',
		},
	],
})
</script>
<template>
	<div class="bg-white dark:bg-slate-950 w-screen">
		<NuxtPage />
		<Toaster />
		<FloatWhatsApp />
		<CookieModal />
	</div>
</template>
