<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<ClientOnly>
		<div class="flex flex-col justify-center items-center space-y-4 custom-blur h-[200px]">
			<div class="w-[400px]">
				<LogoThinkforward class="text-customDark dark:text-customLight" />
			</div>
			<div class="flex justify-center">
				{{ t('footer.text') }}
			</div>

			<a href="/policy-and-privacy" class="text-xs underline"> Politicas de privacidad </a>
		</div>
	</ClientOnly>
</template>
