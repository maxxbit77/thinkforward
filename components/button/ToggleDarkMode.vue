<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const isDark = ref(false)

// Detectar el modo del sistema al montar el componente
onMounted(() => {
	isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches

	// Aplicar la clase 'dark' al <html> según la preferencia del usuario
	document.documentElement.classList.toggle('dark', isDark.value)
})

// Función para alternar el modo manualmente
const toggleDarkMode = () => {
	isDark.value = !isDark.value
	document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<template>
	<div class="">
		<button
			@click="toggleDarkMode"
			class="cursor-pointer duration-500 ease-in-out inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:bg-card/60 hover:text-accent-foreground/80 size-10 outline-none"
		>
			<SvgDarkButton v-if="!isDark" class="" />
			<SvgLightButton v-else class="mt-1" />
		</button>
	</div>
</template>
