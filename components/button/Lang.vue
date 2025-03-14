<script setup>
import { useI18n, useSwitchLocalePath, useRouter } from '#imports'
import { ref, computed, onMounted } from 'vue'
import { DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'radix-vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const availableLocales = computed(() => locales.value)
const selectedLocale = ref(locale.value)

const flags = {
	en: 'circle-flags:en',
	es: 'circle-flags:es',
	de: 'circle-flags:de',
	pl: 'circle-flags:pl',
}

const changeLanguage = async (newLocale) => {
	if (newLocale === locale.value) return

	localStorage.setItem('selectedLocale', newLocale)
	selectedLocale.value = newLocale

	const newPath = switchLocalePath(newLocale)
	if (newPath) {
		await router.push(newPath)
	}
}

onMounted(() => {
	const savedLocale = localStorage.getItem('selectedLocale')
	if (savedLocale && savedLocale !== locale.value) {
		changeLanguage(savedLocale)
	}
})
</script>

<template>
	<div></div>
	<DropdownMenuRoot>
		<DropdownMenuTrigger class="flex items-center gap-2 p-2 rounded-md cursor-pointer border border-gray-600">
			<Icon :name="flags[selectedLocale]" class="size-4" />
			<span>{{ selectedLocale.toUpperCase() }}</span>
			<Icon name="material-symbols:arrow-drop-down-rounded" class="size-4" />
		</DropdownMenuTrigger>
		<DropdownMenuContent class="bg-customLight dark:bg-customDark border border-gray-600 rounded-md shadow-md p-2">
			<DropdownMenuItem
				v-for="loc in availableLocales"
				:key="loc.code"
				@click="changeLanguage(loc.code)"
				class="flex items-center gap-2 cursor-pointer text-customDark dark:text-customLight"
			>
				<Icon :name="flags[loc.code]" class="size-4" />
				<span>{{ loc.code.toUpperCase() }}</span>
			</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenuRoot>
</template>
