<script setup>
import { computed, onMounted } from 'vue'
import { useI18n, useSwitchLocalePath, useRouter } from '#imports'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const availableLocales = computed(() => locales.value)

// Mapa de banderas por idioma (puedes usar emojis o imágenes)
const flags = {
	en: '🇬🇧', // Bandera del Reino Unido
	es: '🇪🇸', // Bandera de España
	de: '🇩🇪', // Bandera de Alemania
	pl: '🇵🇱', // Bandera de Polonia
}

// Función para cambiar el idioma y guardarlo en localStorage
const changeLanguage = (event) => {
	const newLocale = event.target.value
	if (newLocale === locale.value) return // Evitar cambios innecesarios

	localStorage.setItem('selectedLocale', newLocale) // Guardar selección del usuario
	const newPath = switchLocalePath(newLocale)
	if (newPath) {
		router.push(newPath)
	}
}

// Establecer inglés como idioma por defecto si no hay ninguno en localStorage
onMounted(() => {
	const savedLocale = localStorage.getItem('selectedLocale') || 'en'
	if (savedLocale !== locale.value) {
		const newPath = switchLocalePath(savedLocale)
		if (newPath) {
			router.replace(newPath) // Evitar que se acumule en el historial
		}
	}
})
</script>

<template>
	<div class="relative">
		<select :value="locale" @change="changeLanguage" class="p-2 bg-transparent">
			<option v-for="loc in availableLocales" :key="loc.code" :value="loc.code">
				{{ flags[loc.code] }} {{ loc.code.toUpperCase() }}
			</option>
		</select>
	</div>
</template>
