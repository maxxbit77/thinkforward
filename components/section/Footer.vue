<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<ClientOnly>
		<div class="flex flex-col justify-center items-center space-y-4 bg-slate-900 h-[200px]">
			<div class="w-[400px]">
				<LogoThinkforward class="text-customDark dark:text-customLight" />
			</div>
			<div class="flex justify-center">
				{{ t('footer.text') }}
			</div>
		</div>
	</ClientOnly>
</template>
