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

const route = useRoute()

const scrollToSection = () => {
	const section = route.query.section
	if (section) {
		document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
	}
}

onMounted(scrollToSection)
watch(() => route.query.section, scrollToSection)
</script>
<template>
	<div class="bg-white dark:bg-slate-950 w-screen overflow-hidden">
		<MenuNavBar />
		<NuxtPage />
		<Toaster />
		<FloatWhatsApp />
		<CookieModal />
	</div>
</template>
