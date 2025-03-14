<script setup>
import {
	BackgroundsColorsBlue,
	BackgroundsColorsGreen,
	BackgroundsColorsRose,
	BackgroundsColorsYellow,
} from '#components'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
	<ClientOnly>
		<div class="bg-customLight dark:bg-customDark">
			<div class="relative max-w-7xl mx-auto">
				<div class="mb-12 text-center text-customDark dark:text-customLight">
					<h2>{{ $t('services.title') }}</h2>
					<p>{{ $t('services.description') }}</p>
				</div>
				<div class="space-y-8">
					<!-- top section -->
					<div class="grid grid-cols-12 gap-4">
						<CardBorderImage
							src="/images/services/logistic-1200x600.png"
							alt="imagen-map"
							class="col-span-12 md:col-span-6 xl:col-span-9"
						/>
						<CardDescriptor
							class="col-span-12 md:col-span-6 xl:col-span-3"
							:background="BackgroundsColorsBlue"
						>
							<template #title> {{ $t('services.service.coverage.title') }} </template>
							<template #description> {{ $t('services.service.coverage.description') }} </template>
						</CardDescriptor>
					</div>

					<!-- middle section -->
					<div class="grid grid-cols-12 gap-2">
						<div class="col-span-3 hidden lg:block">
							<CardBorderImage src="/images/services/wash-400x600.png" alt="imagen-map" />
						</div>
						<div class="flex col-span-12 lg:col-span-6">
							<div class="grid grid-cols-12 gap-4">
								<CardDescriptor :background="BackgroundsColorsBlue" class="col-span-12 md:col-span-6">
									<template #title>{{ $t('services.service.wash.title') }} </template>
									<template #description>{{ $t('services.service.wash.description') }}</template>
								</CardDescriptor>
								<CardDescriptor :background="BackgroundsColorsRose" class="col-span-12 md:col-span-6">
									<template #title>
										{{ $t('services.service.equipment.title') }}
									</template>
									<template #description>
										{{ $t('services.service.equipment.description') }}
									</template>
								</CardDescriptor>
							</div>
						</div>
						<div class="col-span-3 hidden lg:block">
							<CardBorderImage src="/images/services/equipment.png" alt="imagen-map" />
						</div>
					</div>

					<!-- bottom section -->
					<div class="grid grid-cols-12 gap-4 mt-4">
						<div class="col-span-12 md:col-span-6 xl:col-span-4 flex flex-col space-y-2">
							<CardBorderImage src="/images/services/optimization-600x400.png" alt="imagen-map" />
							<CardDescriptor :background="BackgroundsColorsYellow" class="flex-1 flex flex-col">
								<template #title>
									{{ $t('services.service.optimization.title') }}
								</template>
								<template #description>
									{{ $t('services.service.optimization.description') }}
								</template>
							</CardDescriptor>
						</div>
						<div class="col-span-12 md:col-span-6 xl:col-span-4 flex flex-col space-y-2">
							<CardBorderImage src="/images/services/solutions-600x400.png" alt="imagen-map" />
							<CardDescriptor :background="BackgroundsColorsBlue" class="flex-1 flex flex-col">
								<template #title>
									{{ $t('services.service.solutions.title') }}
								</template>
								<template #description>
									{{ $t('services.service.solutions.description') }}
								</template>
							</CardDescriptor>
						</div>
						<div class="col-span-12 xl:col-span-4 flex flex-col space-y-2">
							<CardBorderImage src="/images/services/eco-600x400.png" alt="imagen-map" />
							<CardDescriptor :background="BackgroundsColorsGreen" class="flex-1 flex flex-col">
								<template #title>
									{{ $t('services.service.eco.title') }}
								</template>
								<template #description>
									{{ $t('services.service.eco.description') }}
								</template>
							</CardDescriptor>
						</div>
					</div>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
