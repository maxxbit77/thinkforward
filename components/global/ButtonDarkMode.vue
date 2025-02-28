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
	<button @click="toggleDarkMode">
		{{ isDark ? 'Modo Claro' : 'Modo Oscuro' }}
	</button>
</template>
