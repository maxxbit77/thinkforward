<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<ClientOnly>
		<div>
			<div class="bg-customLight dark:bg-customDark">
				<div class="mb-12 text-center text-customDark dark:text-customLight">
					<h3 class="text-4xl">{{ t('companies.title') }}</h3>
					<p>{{ t('companies.description') }}</p>
				</div>
				<ImageBrandBanner />
			</div>
		</div>
	</ClientOnly>
</template>
