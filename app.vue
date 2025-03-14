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
		<Transition name="page">
			<NuxtPage />
		</Transition>
		<Toaster />
		<FloatWhatsApp />
		<CookieModal />
		<footer class="mt-24">
			<SectionFooter />
		</footer>
	</div>
</template>

<style>
/* Página entra con opacidad y subiendo */
.page-enter-active,
.page-leave-active {
	transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-enter-from {
	opacity: 0;
	transform: translateY(20px);
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}
</style>
