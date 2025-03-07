<script setup>
import {
	BackgroundsColorsBlue,
	BackgroundsColorsGreen,
	BackgroundsColorsRose,
	BackgroundsColorsYellow,
} from '#components'
</script>
<template>
	<ClientOnly>
		<div class="bg-customLight dark:bg-customDark">
			<div class="relative max-w-7xl mx-auto">
				<div class="mb-12 text-center text-customDark dark:text-customLight">
					<h3 class="text-4xl">{{ $t('services.title') }}</h3>
					<p>{{ $t('services.description') }}</p>
				</div>
				<div class="space-y-12">
					<div class="grid grid-cols-12 gap-4">
						<CardBorderImage
							src="/images/services/logistic-1200x600.png"
							alt="imagen-map"
							class="h-[430px] col-span-9"
						>
						</CardBorderImage>
						<CardSideImage class="col-span-3" :background="BackgroundsColorsBlue">
							<template #title> Cobertura internacional </template>
							<template #description> Esto es la descripcion de la covertura internacional </template>
						</CardSideImage>
					</div>
					<div class="grid grid-cols-3 gap-4">
						<CardBorderImage
							src="/images/services/wash-400x600.png"
							alt="imagen-map"
							class="h-[630px] col-span-1"
							titlePosition="top"
						>
							<template #title>
								<h3>Lavados</h3>
							</template>
						</CardBorderImage>
						<div class="grid row-2 gap-4">
							<div class="">
								<CardSideImage :background="BackgroundsColorsBlue">
									<template #title> title lavadooooooooo </template>
									<template #description> descripcion lavadooooooooo </template>
								</CardSideImage>
							</div>
							<div>
								<CardSideImage :background="BackgroundsColorsRose">
									<template #title> title equipment </template>
									<template #description> descripcion equipment </template>
								</CardSideImage>
							</div>
						</div>
						<CardBorderImage
							src="/images/services/equipment.png"
							alt="imagen-map"
							class="h-[630px] col-span-1"
						>
							<template #title>
								<div>titulo</div>
							</template>
						</CardBorderImage>
					</div>
					<div class="grid grid-cols-12 gap-4">
						<CardBorderImage
							src="/images/services/optimization-600x400.png"
							alt="imagen-map"
							class="h-[350px] col-span-6"
						>
							<template #title>
								<div>titulo</div>
							</template>
						</CardBorderImage>
						<CardSideImage :background="BackgroundsColorsYellow" class="col-span-6">
							<template #title> title equipment </template>
							<template #description> descripcion equipment </template>
						</CardSideImage>
					</div>
					<div class="grid grid-cols-12 gap-4">
						<CardSideImage :background="BackgroundsColorsBlue" class="col-span-5">
							<template #title> title equipment </template>
							<template #description> descripcion equipment </template>
						</CardSideImage>
						<CardBorderImage
							src="/images/services/solutions-600x400.png"
							alt="imagen-map"
							class="h-[350px] col-span-7"
						>
							<template #title>
								<div>titulo</div>
							</template>
						</CardBorderImage>
					</div>
					<div class="grid grid-cols-12 gap-4">
						<CardBorderImage
							src="/images/services/eco-600x400.png"
							alt="imagen-map"
							class="h-[350px] col-span-8"
						>
							<template #title>
								<div>titulo</div>
							</template>
						</CardBorderImage>
						<CardSideImage :background="BackgroundsColorsGreen" class="col-span-4">
							<template #title> title equipment </template>
							<template #description> descripcion equipment </template>
						</CardSideImage>
					</div>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
