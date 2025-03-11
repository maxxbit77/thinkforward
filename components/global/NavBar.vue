<script setup>
import { useI18n } from '#imports'
import { useRoute, useRouter } from 'vue-router'

const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

// Función para cambiar la sección sin recargar la página
const navigateToSection = (section) => {
	router.push({ path: localePath('index'), query: { section } })
}
</script>

<template>
	<div>
		<Header />
		<div class="fixed top-0 left-0 w-full custom-blur p-4 z-40 text-slate-950 dark:text-customLight h-20">
			<div class="max-w-7xl grid grid-cols-3 items-center mx-auto">
				<div class="flex justify-between items-center h-full">
					<div class="flex space-x-6">
						<button @click="navigateToSection('home')">
							{{ t('menu.home') }}
						</button>
						<button @click="navigateToSection('services')">
							{{ t('menu.services') }}
						</button>
						<button @click="navigateToSection('products')">
							{{ t('menu.products') }}
						</button>
					</div>
				</div>
				<div />
				<div class="flex justify-end items-center h-full space-x-6">
					<button @click="navigateToSection('contact')">
						{{ t('menu.contact') }}
					</button>
					<button @click="navigateToSection('about')">
						{{ t('menu.about') }}
					</button>
					<ButtonLang />
					<ButtonToggleDarkMode />
				</div>
			</div>
		</div>
	</div>
</template>
