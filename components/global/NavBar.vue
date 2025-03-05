<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<div>
		<Header />
		<div class="fixed top-0 left-0 w-full bg-white/30 backdrop-blur p-4 z-40 text-slate-950 h-20">
			<div class="max-w-7xl grid grid-cols-3 items-center mx-auto">
				<div class="flex justify-between items-center h-full">
					<div class="flex space-x-6">
						<NuxtLink to="#home">
							{{ t('menu.home') }}
						</NuxtLink>
						<NuxtLink to="#services">{{ t('menu.services') }}</NuxtLink>
						<NuxtLink to="#products">{{ t('menu.products') }}</NuxtLink>
					</div>
				</div>
				<div />
				<div class="flex justify-end items-center h-full space-x-6">
					<NuxtLink to="#contact">{{ t('menu.contact') }}</NuxtLink>
					<NuxtLink to="#home">{{ t('menu.about') }}</NuxtLink>
					<ButtonLang />
					<ButtonToggleDarkMode />
				</div>
			</div>
		</div>
	</div>
</template>
