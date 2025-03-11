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
							class="h-[430px] col-span-9"
						>
						</CardBorderImage>
						<CardDescriptor class="col-span-3" :background="BackgroundsColorsBlue">
							<template #title> {{ $t('services.service.coverage.title') }} </template>
							<template #description> {{ $t('services.service.coverage.description') }} </template>
						</CardDescriptor>
					</div>

					<!-- middle section -->
					<div class="grid grid-cols-3 gap-4">
						<CardBorderImage
							src="/images/services/wash-400x600.png"
							alt="imagen-map"
							class="h-[630px] col-span-1"
							titlePosition="top"
						>
						</CardBorderImage>
						<div class="grid row-2 gap-4">
							<div class="">
								<CardDescriptor :background="BackgroundsColorsBlue">
									<template #title>{{ $t('services.service.wash.title') }} </template>
									<template #description>{{ $t('services.service.wash.description') }}</template>
								</CardDescriptor>
							</div>
							<div>
								<CardDescriptor :background="BackgroundsColorsRose">
									<template #title>
										{{ $t('services.service.equipment.title') }}
									</template>
									<template #description>
										{{ $t('services.service.equipment.description') }}
									</template>
								</CardDescriptor>
							</div>
						</div>
						<CardBorderImage
							src="/images/services/equipment.png"
							alt="imagen-map"
							class="h-[630px] col-span-1"
						>
						</CardBorderImage>
					</div>

					<!-- bottom section -->
					<div class="grid row-2">
						<div class="grid grid-cols-12 gap-4">
							<CardBorderImage
								src="/images/services/optimization-600x400.png"
								alt="imagen-map"
								class="h-[350px] col-span-4"
							>
							</CardBorderImage>
							<CardBorderImage
								src="/images/services/solutions-600x400.png"
								alt="imagen-map"
								class="h-[350px] col-span-4"
							>
							</CardBorderImage>
							<CardBorderImage
								src="/images/services/eco-600x400.png"
								alt="imagen-map"
								class="h-[350px] col-span-4"
							>
							</CardBorderImage>
						</div>
						<div class="grid grid-cols-12 gap-4 h-[250px] mt-4">
							<CardDescriptor :background="BackgroundsColorsYellow" class="col-span-4">
								<template #title>
									{{ $t('services.service.optimization.title') }}
								</template>
								<template #description>
									{{ $t('services.service.optimization.description') }}
								</template>
							</CardDescriptor>
							<CardDescriptor :background="BackgroundsColorsBlue" class="col-span-4">
								<template #title>
									{{ $t('services.service.solutions.title') }}
								</template>
								<template #description>
									{{ $t('services.service.solutions.description') }}
								</template>
							</CardDescriptor>
							<CardDescriptor :background="BackgroundsColorsGreen" class="col-span-4">
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
