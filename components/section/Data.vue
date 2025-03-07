<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<ClientOnly>
		<div class="max-w-7xl mx-auto">
			<div class="mb-12 text-center text-customDark dark:text-customLight">
				<h3 class="text-4xl">{{ t('data.title') }}</h3>
				<p>{{ t('data.description') }}</p>
			</div>
			<div class="grid grid-cols-4 gap-x-4">
				<div
					class="relative bg-gray-500/10 dark:bg-customDark/20 rounded-lg col-span-2 flex flex-col justify-center backdrop-blur-xl items-center border-2 border-customDark dark:border-gray-500"
				>
					<p class="absolute top-0 text-2xl z-10">{{ t('data.charts.chart-1.title') }}</p>
					<ChartsBar class="p-8" :colors="['blue', 'gray']" />
				</div>

				<div class="col-span-2 grid grid-row-2 gap-4">
					<div class="relative grid grid-cols-2 gap-4">
						<AnimationsCountUp :value="1000" :speed="200" :step="5">
							{{ t('data.charts.box-1.title') }}
						</AnimationsCountUp>

						<AnimationsCountUp :value="22000" :speed="4000" :step="100">
							{{ t('data.charts.box-2.title') }}
						</AnimationsCountUp>
					</div>

					<AnimationsCountUp :value="200000" :speed="10000" :step="1000">
						{{ t('data.charts.box-3.title') }}
					</AnimationsCountUp>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
