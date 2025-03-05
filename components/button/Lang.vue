<script setup>
import { useI18n, useSwitchLocalePath, useRouter } from '#imports'

const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const availableLocales = computed(() => locales.value)
const selectedLocale = ref(locale.value)

const flags = {
	en: '🇬🇧',
	es: '🇪🇸',
	de: '🇩🇪',
	pl: '🇵🇱',
}

const changeLanguage = (event) => {
	const newLocale = event.target.value
	if (newLocale === locale.value) return

	localStorage.setItem('selectedLocale', newLocale)
	selectedLocale.value = newLocale

	const newPath = switchLocalePath(newLocale)
	if (newPath) {
		router.push(newPath)
	}
}

onMounted(() => {
	const savedLocale = localStorage.getItem('selectedLocale') || 'en'
	if (savedLocale !== locale.value) {
		setLocale(savedLocale)
		selectedLocale.value = savedLocale

		const newPath = switchLocalePath(savedLocale)
		if (newPath) {
			router.replace(newPath)
		}
	}
})
</script>

<template>
	<div class="relative">
		<select v-model="selectedLocale" @change="changeLanguage" class="p-2 bg-transparent cursor-pointer">
			<option v-for="loc in availableLocales" :key="loc.code" :value="loc.code">
				{{ flags[loc.code] }} {{ loc.code.toUpperCase() }}
			</option>
		</select>
	</div>
</template>
